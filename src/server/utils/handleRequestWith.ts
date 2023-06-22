import { saveState } from './saveState.ts';
import { loadState } from './loadState.ts';

export function handleRequestWith(event: FetchEvent, handler: () => Promise<Response>) {
    event.respondWith(
        loadState().then(async () => {
            const resp = await handler();
            await saveState();

            return resp;
        }),
        // .then(async (responce) => {
        //     return responce;
        // }),
    );
}
