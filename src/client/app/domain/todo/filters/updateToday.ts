import { todayKey } from '../../navigationFilter';
import { isTodayItem } from '../../../../../common/domain/todo/isTodayItem';

export function updateToday(state: TodoState, todo: Todo): void {
    const today = state.idsByFilterId[todayKey];
    const timestamp = Date.now();
    const idx = today.indexOf(todo.todo_id);

    if (isTodayItem(todo, timestamp)) {
        // если задача есть в today - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в today
            state.idsByFilterId[todayKey] = [...today, todo.todo_id];
        }
    } else {
        // если задача была в today - удаляем ее
        if (idx > -1) {
            const newToday = [...today];

            newToday.splice(idx, 1);
            state.idsByFilterId[todayKey] = newToday;
        }
    }
}
