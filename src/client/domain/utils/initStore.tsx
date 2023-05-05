import { unstable_batchedUpdates } from 'react-dom';

import { useTodoStore } from '../store.ts';
import { serverInitialState } from '../../../server/serverInitialState';

export function initStore() {
    unstable_batchedUpdates(() => {
        const { createIcon, createStatus, createCategory, createTodo } = useTodoStore.getState();
        const { icons, statuses, categories, todos } = serverInitialState;

        icons?.forEach((icon) => createIcon(icon));
        statuses?.forEach((status) => createStatus(status));
        categories?.forEach((category) => createCategory(category));
        todos?.forEach((todo) => createTodo(todo));
    });
}
