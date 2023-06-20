import { jsonHeader } from './consts.ts';
import { state } from '../domain/state.ts';
import { loadState } from './loadState.ts';

export async function handleGetRequest(event: FetchEvent, pathname: string) {
    // если не перехватываем другие url - sw будет брать их из кэша или сети сам
    if (pathname === '/api/get_todos') {
        event.respondWith(
            loadState().then(() => {
                return new Response(JSON.stringify(state), {
                    headers: jsonHeader,
                });
            }),
        );
    }
}
