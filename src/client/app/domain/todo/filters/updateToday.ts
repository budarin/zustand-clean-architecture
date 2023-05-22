import { todayKey } from '../../navigationFilter';
import { isTodayItem } from '../../../../../common/domain/todo/isTodayItem';

export function updateToday(state: TodoState, todo: Todo): void {
    const todayIds = state.idsByFilterId[todayKey];
    const timestamp = Date.now();
    const idx = todayIds.indexOf(todo.todo_id);

    if (isTodayItem(todo, timestamp)) {
        // если задача есть в today - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в today
            state.idsByFilterId[todayKey] = [...todayIds, todo.todo_id];
        }
    } else {
        // если задача была в today - удаляем ее
        if (idx > -1) {
            const newToday = [...todayIds];

            newToday.splice(idx, 1);
            state.idsByFilterId[todayKey] = newToday;
        }
    }
}
