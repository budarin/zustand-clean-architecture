import { unstable_batchedUpdates } from 'react-dom';

import { useTodoStore } from '../store.tsx';
import { serverInitialState } from '../../../../server/serverInitialState.ts';

export function initStore() {
    unstable_batchedUpdates(() => {
        const {
            _createIcon: createIcon,
            _createStatus: createStatus,
            _createCategory: createCategory,
            _createTodo: createTodo,
        } = useTodoStore.getState();
        const { icons, statuses, categories, todos } = serverInitialState;

        icons?.forEach((icon) => {
            try {
                createIcon(icon);
            } catch (error) {
                console.error(error);
            }
        });
        statuses?.forEach((status) => {
            try {
                createStatus(status);
            } catch (error) {
                console.error(error);
            }
        });
        categories?.forEach((category) => {
            try {
                createCategory(category);
            } catch (error) {
                console.error(error);
            }
        });
        todos?.forEach((todo) => {
            try {
                createTodo(todo);
            } catch (error) {
                console.error(error);
            }
        });
    });
}
