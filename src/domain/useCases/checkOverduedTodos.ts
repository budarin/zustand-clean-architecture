import { useTodoStore } from '../store/store.tsx';
import { TWO_MINUTES } from '../../utils/dateTime/consts.ts';
import { overdueKey } from '../entities/navigationFilter/index.ts';
import { joyfullyGilling } from '../../infrastructure/services/Notification/index.ts';
import { createFilterNavFilter } from '../entities/navigationFilter/createFilterNavFilter.ts';

export const setOverdueInBadge = async () => {
    const { todos } = useTodoStore.getState();

    if ('setAppBadge' in navigator) {
        const values = Object.values(todos.idsByDueDate) as Id[][];
        const count = values.reduce((acc, arr) => {
            return acc + arr.length;
        }, 0);

        count ? await navigator.setAppBadge(count) : await navigator.clearAppBadge();
    }
};

export function checkOverdueTodos(): void {
    const today = new Date();
    const now = today.valueOf();
    const { todos, _addToOverdueTodos, setNavigationFilter } = useTodoStore.getState();

    const overdueIds = todos.idsByFilterId[overdueKey];

    for (const todo of Object.values(todos.byId)) {
        if (todo.due_date) {
            const diff = now - todo.due_date_time_ts;
            const isOverdue = diff > 0 && !overdueIds.includes(todo.todo_id) && !todo.completed && !todo.deleted;

            if (isOverdue && Math.abs(diff) < TWO_MINUTES) {
                joyfullyGilling(`lalala: ${todo.todo}`, {
                    toastId: 'due_date:' + todo.todo,
                    onClose: async () => {
                        setNavigationFilter(createFilterNavFilter('Просроченные', overdueKey));
                        _addToOverdueTodos(todo.todo_id);
                        setOverdueInBadge();
                    },
                });
            }
        }
    }
}
