import { jsonHeader } from './consts.ts';
import { todosUrl } from '../index.ts';

export async function saveState(state: Entities) {
    const cache = await caches.open('todo-sw');
    const stateStr = JSON.stringify(state);

    await cache.put(
        todosUrl,
        new Response(stateStr, {
            headers: new Headers({
                ...jsonHeader,
                'Cache-Control': 'max-age=31536000',
                'Content-Length': String(stateStr.length),
            }),
        }),
    );
}
