import { updateOverdue } from './filters/updateOverdue.ts';
import { updateInbox } from './filters/updateInbox.ts';
import { updateToday } from './filters/updateToday.ts';
import { updateNext } from './filters/updateNext.ts';
import { updateRecycleBin } from './filters/updateRecycleBin.ts';
import { deleteTodoFromFilters } from './filters/deleteTodoFromFilters.ts';
import { inboxKey, nextKey, overdueKey, todayKey } from '../navigationFilter/index.ts';

export function updateTodoFilters(state: TodoState, newTodo: Todo, oldTodo?: Todo): void {
    // если задача удалена - удалить из всех фильтров и поместить в RecycleBin
    if (oldTodo && oldTodo.deleted == false && newTodo.deleted === true) {
        deleteTodoFromFilters(state, [overdueKey, inboxKey, todayKey, nextKey], oldTodo);
        updateRecycleBin(state, newTodo);
        return;
    }

    updateOverdue(state, newTodo);
    updateInbox(state, newTodo);
    updateToday(state, newTodo);
    updateNext(state, newTodo);
    updateRecycleBin(state, newTodo);
}
