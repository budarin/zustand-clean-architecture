import { setOverdueInBadge } from './setOverdueInBadge.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { TWO_MINUTES } from '../../utils/dateTime/consts.ts';
import { addTodoToOverdueList } from './addTodoToOverdueList.ts';
import { overdueKey } from '../../domain/store/navigationFilter/index.ts';
import { joyfullyGilling } from '../../services/contracts/Notification/index.ts';
import { createFilterNavigationFilter } from '../../domain/store/navigationFilter/createFilterNavigationFilter.ts';

export function checkOverdueTodos(): void {
    const now = Date.now();

    const { todos, setNavigationFilter } = useTodoStore.getState();
    const overdueIds = todos.idsByFilterId[overdueKey];

    for (const todo of Object.values(todos.byId)) {
        if (todo.due_date) {
            const diff = now - todo.due_date_time_ts;
            const isOverdue = diff > 0 && !overdueIds.includes(todo.todo_id) && !todo.completed && !todo.deleted;

            if (isOverdue && Math.abs(diff) < TWO_MINUTES) {
                joyfullyGilling(`lalala: ${todo.todo}`, {
                    toastId: 'due_date:' + todo.todo,
                    onClose: async () => {
                        setNavigationFilter(createFilterNavigationFilter('Просроченные', overdueKey));
                        addTodoToOverdueList(todo.todo_id);
                        setOverdueInBadge();
                    },
                });
            }
        }
    }
}
