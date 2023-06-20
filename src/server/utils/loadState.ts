import { todosUrl } from './consts.ts';
import { saveState } from './saveState.ts';
import { setState, state } from '../domain/state.ts';
import { serverInitialState } from './serverInitialState.ts';

const { log } = console;

export async function loadState() {
    if (state === undefined) {
        try {
            const cache = await caches.open('todo-sw');
            const response = await cache.match(todosUrl);

            if (response !== undefined) {
                const data = await response.json();

                if (data) {
                    setState(data);
                }
            }

            if (!state) {
                setState(serverInitialState);
                await saveState();
            }
        } catch (error) {
            log('sw: error in loadState', error);
        }
    }
}
