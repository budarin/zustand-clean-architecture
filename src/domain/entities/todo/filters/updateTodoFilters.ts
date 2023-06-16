import { updateInbox } from './updateInbox';
import { updateOverdue } from './updateOverdue';
import { updateRecycleBin } from './updateRecycleBin';
import { inboxKey, overdueKey } from '../../navigationFilter';
import { deleteTodoFromFilters } from './deleteTodoFromFilters';
import { isNotExists } from '../../validation_utils/isNotExists';

export function updateTodoFilters(state: TodoState, newTodo: ExtendedTodo, oldTodo?: ExtendedTodo): void {
    // если задача удалена - удалить из всех фильтров и поместить в RecycleBin
    if (oldTodo && oldTodo.deleted === false && newTodo.deleted === true) {
        deleteTodoFromFilters(state, [inboxKey, overdueKey], oldTodo);
        updateRecycleBin(state, newTodo);
        return;
    }

    // если новая задача или у задачи изменилась дата due_date
    if (isNotExists(oldTodo) || oldTodo.due_date !== newTodo.due_date) {
        updateOverdue(state, newTodo);
    }

    updateInbox(state, newTodo);
    updateRecycleBin(state, newTodo);
}
