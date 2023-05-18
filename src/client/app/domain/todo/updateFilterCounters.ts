import { isNextItem } from '../../../../common/domain/todo/isNextItem.ts';
import { isInboxItem } from '../../../../common/domain/todo/isInboxItem.ts';
import { isTodayItem } from '../../../../common/domain/todo/isTodayItem.ts';
import { isRecycleBinItem } from '../../../../common/domain/todo/isRecycleBinItem.ts';
import { inboxKey, nextKey, recycleBinKey, todayKey } from '../navigationFilter/index.ts';

export function updateFilterCounters(todo: Todo, state: TodoState): void {
    const byId = state.idsByFilterId;

    // проверяем принадлежит ли todo фильтру inbox
    const inbox = byId[inboxKey];
    let idx = inbox.indexOf(todo.todo_id);

    if (isInboxItem(todo)) {
        if (idx === -1) {
            byId[inboxKey] = [...inbox, todo.todo_id];
        }
        return;
    } else {
        if (idx > -1) {
            const newInbox = [...inbox];
            newInbox.splice(idx, 1);
            byId[inboxKey] = newInbox;
        }
    }

    // проверяем принадлежит ли todo фильтру today
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const timestamp = date.valueOf();

    const today = byId[todayKey];
    idx = today.indexOf(todo.todo_id);
    if (isTodayItem(todo, timestamp)) {
        if (idx === -1) {
            byId[todayKey] = [...today, todo.todo_id];
        }

        return;
    } else {
        if (idx > -1) {
            const newToday = [...today];
            newToday.splice(idx, 1);
            byId[todayKey] = [...today];
        }
    }

    // проверяем принадлежит ли todo фильтру next
    const next = byId[nextKey];
    idx = next.indexOf(todo.todo_id);
    if (isNextItem(todo, timestamp)) {
        if (idx === -1) {
            byId[nextKey] = [...next, todo.todo_id];
        }

        return;
    } else {
        if (idx > -1) {
            const newNext = [...next];
            newNext.splice(idx, 1);
            byId[nextKey] = newNext;
        }
    }

    // проверяем принадлежит ли todo фильтру recycleBin
    const recycleBin = byId[recycleBinKey];
    idx = recycleBin.indexOf(todo.todo_id);
    if (isRecycleBinItem(todo)) {
        if (idx === -1) {
            byId[recycleBinKey] = [...recycleBin, todo.todo_id];
        } else {
            const newRecycleBin = [...recycleBin];
            newRecycleBin.splice(idx, 1);
            byId[recycleBinKey] = newRecycleBin;
        }
    } else {
        const idx = recycleBin.indexOf(todo.todo_id);

        if (idx > -1) {
            const newRecycleBin = [...recycleBin];
            newRecycleBin.splice(idx, 1);
            byId[recycleBinKey] = newRecycleBin;
        }
    }
}
