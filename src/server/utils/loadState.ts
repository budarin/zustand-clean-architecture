import { todosUrl } from './consts.ts';
import { saveState } from './saveState.ts';
import { setState, getState } from '../domain/state.ts';
import { serverInitialState } from './serverInitialState.ts';
import { logger } from '../services/logger.ts';

export async function loadState(): Promise<void> {
    if (getState().icons.length === 0) {
        try {
            const cache = await caches.open('todo-sw');
            const response = await cache.match(todosUrl);

            if (response !== undefined) {
                const data = await response.json();

                if (data) {
                    setState(data);
                }
            }

            if (getState().icons.length === 0) {
                setState(serverInitialState);
                await saveState();
            }
        } catch (error) {
            logger.error({ message: 'sw: error in loadState', error });
        }
    }
}
