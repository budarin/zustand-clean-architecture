import { updateInbox } from './updateInbox.ts';
import { updateOverdue } from './updateOverdue.ts';
import { updateRecycleBin } from './updateRecycleBin.ts';
import { deleteTodoFromFilters } from './deleteTodoFromFilters.ts';
import { inboxKey, overdueKey } from '../../navigationFilter/index.ts';
import { isNotExists } from '../../../entities/validation_utils/isNotExists.ts';

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
