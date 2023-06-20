import { saveState } from './saveState.ts';
import { loadState } from './loadState.ts';

export function handleRequestWith(event: FetchEvent, handler: () => Promise<Response>) {
    event.respondWith(
        loadState()
            .then(() => handler())
            .then((responce) => {
                saveState();
                return responce;
            }),
    );
}
