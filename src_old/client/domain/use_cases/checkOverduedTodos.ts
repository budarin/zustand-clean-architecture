import * as notification from '../../../../src/infrastructure/services/Notification/index.ts';

import { useTodoStore } from '../entities/store.tsx';
import { overdueKey } from '../entities/navigationFilter/index.ts';
import { TWO_MINUTES } from '../../../common/utils/dateTime/consts.ts';
import { createCalendarNavigationFilter } from '../action_creators/createCalendarNavigationFilter.ts';

export function checkOverduedTodos(): void {
    const today = new Date();
    const now = today.valueOf();
    const { todos, _addToOverduedTodos, setNavigationFilter } = useTodoStore.getState();

    const overdueIds = todos.idsByFilterId[overdueKey];

    Object.values(todos.byId).forEach((todo) => {
        if (todo.due_date) {
            const diff = now - todo.due_date_time_ts;
            const isOverdue = diff > 0 && overdueIds.indexOf(todo.todo_id) === -1 && !todo.completed && !todo.deleted;

            if (isOverdue) {
                if (Math.abs(diff) < TWO_MINUTES) {
                    notification.joyfullyGilling(`lalala: ${todo.todo}`, {
                        toastId: 'due_date:' + todo.todo,
                        onClose: () => {
                            setNavigationFilter(createCalendarNavigationFilter(today));
                            _addToOverduedTodos(todo.todo_id);
                        },
                    });
                }
            }
        }
    });
}
