import { getState } from '../domain/state.ts';
import { jsonHeader, todosUrl } from './consts.ts';

export async function saveState(): Promise<void> {
    const state = getState();
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
