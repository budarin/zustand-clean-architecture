import { overdueKey } from '../../navigationFilter';
import { isOverdueItem } from '../../../../../common/domain/todo/isOverdueItem';

// Добавляем задачу в список просроченных

export function updateOverdue(state: TodoState, todo: Todo) {
    const overdue = state.idsByFilterId[overdueKey];
    const idx = overdue.indexOf(todo.todo_id);

    if (isOverdueItem(todo)) {
        // если задача есть в overdue - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в overdue
            state.idsByFilterId[overdueKey] = [...overdue, todo.todo_id];
        }
    } else {
        // если задача была в overdue - удаляем ее
        if (idx > -1) {
            const newOverdue = [...overdue];

            newOverdue.splice(idx, 1);
            state.idsByFilterId[overdueKey] = newOverdue;
        }
    }
}
