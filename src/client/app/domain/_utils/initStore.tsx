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

        icons?.forEach((icon) => createIcon(icon));
        statuses?.forEach((status) => createStatus(status));
        categories?.forEach((category) => createCategory(category));
        todos?.forEach((todo) => createTodo(todo));
    });
}
