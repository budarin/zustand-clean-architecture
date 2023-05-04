import { unstable_batchedUpdates } from 'react-dom';

import { createIcon } from '../../useCases/icon';
import { createTodo } from '../../useCases/todos';
import { createStatus } from '../../useCases/status';
import { createCategory } from '../../useCases/category';
import { serverInitialState } from '../../../server/serverInitialState';

export function initStore() {
    unstable_batchedUpdates(() => {
        const { icons, statuses, categories, todos } = serverInitialState;

        icons?.forEach((icon) => createIcon(icon));
        statuses?.forEach((status) => createStatus(status));
        categories?.forEach((category) => createCategory(category));
        todos?.forEach((todo) => createTodo(todo));
    });
}
