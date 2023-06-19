import { saveState } from './saveState.ts';
import { loadState, state } from '../index.ts';

export function handleRequestWith(event: FetchEvent, handler: () => Promise<Response>) {
    event.respondWith(
        loadState()
            .then(() => handler())
            .then((responce) => {
                saveState(state);
                return responce;
            }),
    );
}
