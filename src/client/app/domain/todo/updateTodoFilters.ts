import { updateInbox } from './filters/updateInbox.ts';
import { updateOverdue } from './filters/updateOverdue.ts';
import { updateRecycleBin } from './filters/updateRecycleBin.ts';
import { inboxKey, overdueKey } from '../navigationFilter/index.ts';
import { deleteTodoFromFilters } from './filters/deleteTodoFromFilters.ts';
import { isNotExists } from '../../../../common/validation_utils/isNotExists.ts';

export function updateTodoFilters(state: TodoState, newTodo: Todo, oldTodo?: Todo): void {
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
