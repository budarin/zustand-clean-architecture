import { unstable_batchedUpdates } from 'react-dom';

import { _createIcon } from '../entities/icon/actions';
import { _createTodo } from '../entities/todo/actions';
import { _createStatus } from '../entities/status/actions';
import { _createCategory } from '../entities/category/actions';
import { serverInitialState } from '../../../server/serverInitialState';

export function initStore() {
    unstable_batchedUpdates(() => {
        const { icons, statuses, categories, todos } = serverInitialState;

        icons?.forEach((icon) => _createIcon(icon));
        statuses?.forEach((status) => _createStatus(status));
        categories?.forEach((category) => _createCategory(category));
        todos?.forEach((todo) => _createTodo(todo));
    });
}
