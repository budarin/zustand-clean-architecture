import { updateOverdue } from './filters/updateOverdue.ts';
import { updateInbox } from './filters/updateInbox.ts';
import { updateToday } from './filters/updateToday.ts';
import { updateNext } from './filters/updateNext.ts';
import { updateRecycleBin } from './filters/updateRecycleBin.ts';

export function updateIdsByFilterId(state: TodoState, todo: Todo): void {
    updateOverdue(state, todo);
    updateInbox(state, todo);
    updateToday(state, todo);
    updateNext(state, todo);
    updateRecycleBin(state, todo);
}
