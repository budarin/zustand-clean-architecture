import * as notification from '../../infrastructure/services/Notification/index.ts';

import { useTodoStore } from '../store/store.tsx';
import { TWO_MINUTES } from '../../utils/dateTime/consts.ts';
import { overdueKey } from '../entities/navigationFilter/index.ts';
import { createFilterNavFilter } from '../entities/navigationFilter/createFilterNavFilter.ts';

export const setOveduedInBadge = async () => {
    const { todos } = useTodoStore.getState();

    if ('setAppBadge' in navigator) {
        const values = Object.values(todos.idsByDueDate) as Id[][];
        const count = values.reduce((acc, arr) => {
            acc = acc + arr.length;
            return acc;
        }, 0);

        count ? await navigator.setAppBadge(count) : await navigator.clearAppBadge();
    }
};

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
                        onClose: async () => {
                            setNavigationFilter(createFilterNavFilter('Просроченные', overdueKey));
                            _addToOverduedTodos(todo.todo_id);
                            setOveduedInBadge();
                        },
                    });
                }
            }
        }
    });
}
