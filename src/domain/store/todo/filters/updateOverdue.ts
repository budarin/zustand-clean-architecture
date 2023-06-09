import { overdueKey } from '../../navigationFilter/index.ts';
import { isOverdueItem } from './isOverdueItem.ts';

// Добавляем задачу в список просроченных

export function updateOverdue(state: TodoState, todo: ExtendedTodo): void {
    const overdueIds = state.idsByFilterId[overdueKey];
    const idx = overdueIds.indexOf(todo.todo_id);

    if (isOverdueItem(todo)) {
        // если задача есть в overdue - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в overdue
            state.idsByFilterId[overdueKey] = [...overdueIds, todo.todo_id];
        }
    } else {
        // если задача была в overdue - удаляем ее
        if (idx > -1) {
            const newOverdue = [...overdueIds];

            newOverdue.splice(idx, 1);
            state.idsByFilterId[overdueKey] = newOverdue;
        }
    }
}
