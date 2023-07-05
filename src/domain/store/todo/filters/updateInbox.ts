import { isInboxItem } from './isInboxItem.ts';
import { inboxKey } from '../../navigationFilter/index.ts';

export function updateInbox(state: TodoState, todo: Todo): void {
    const inboxIds = state.idsByFilterId[inboxKey];
    const idx = inboxIds.indexOf(todo.todo_id);

    if (isInboxItem(todo)) {
        // если задача есть в Inbox - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в Inbox
            state.idsByFilterId[inboxKey] = [...inboxIds, todo.todo_id];
        }
    } else {
        // если задача была в inbox - удаляем ее
        if (idx > -1) {
            const newInbox = [...inboxIds];

            newInbox.splice(idx, 1);
            state.idsByFilterId[inboxKey] = newInbox;
        }
    }
}
