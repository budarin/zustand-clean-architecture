import { isInboxItem } from '../../../../../common/domain/todo/isInboxItem';
import { inboxKey } from '../../navigationFilter';

export function updateInbox(state: TodoState, todo: Todo): void {
    const inbox = state.idsByFilterId[inboxKey];
    const idx = inbox.indexOf(todo.todo_id);

    if (isInboxItem(todo)) {
        // если задача есть в Inbox - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в Inbox
            state.idsByFilterId[inboxKey] = [...inbox, todo.todo_id];
        }
    } else {
        // если задача была в inbox - удаляем ее
        if (idx > -1) {
            const newInbox = [...inbox];

            newInbox.splice(idx, 1);
            state.idsByFilterId[inboxKey] = newInbox;
        }
    }
}
