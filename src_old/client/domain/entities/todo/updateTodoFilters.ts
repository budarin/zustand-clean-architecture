import { updateInbox } from '../../../../../src/domain/entities/todo/filters/updateInbox.ts';
import { updateOverdue } from '../../../../../src/domain/entities/todo/filters/updateOverdue.ts';
import { updateRecycleBin } from '../../../../../src/domain/entities/todo/filters/updateRecycleBin.ts';
import { inboxKey, overdueKey } from '../../../../../src/domain/entities/navigationFilter/index.ts';
import { deleteTodoFromFilters } from '../../../../../src/domain/entities/todo/filters/deleteTodoFromFilters.ts';
import { isNotExists } from '../../../../../src/domain/utils/validation/isNotExists.ts';

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
