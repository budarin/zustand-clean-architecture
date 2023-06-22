import { jsonHeader } from './consts.ts';
import { loadState } from './loadState.ts';
import { getState } from '../domain/state.ts';

export async function handleGetRequest(event: FetchEvent, pathname: string) {
    // если не перехватываем другие url - sw будет брать их из кэша или сети сам
    if (pathname === '/api/get_todos') {
        event.respondWith(
            loadState().then(() => {
                const state = getState();

                return new Response(JSON.stringify(state), {
                    headers: jsonHeader,
                });
            }),
        );
    }
}
