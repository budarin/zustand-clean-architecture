import { nextKey } from '../../navigationFilter';
import { isNextItem } from '../../../../../common/domain/todo/isNextItem';

export function updateNext(state: TodoState, todo: Todo): void {
    const nextIds = state.idsByFilterId[nextKey];

    const date = new Date();
    date.setDate(date.getDate() + 1);
    const timestamp = date.valueOf();

    const idx = nextIds.indexOf(todo.todo_id);

    if (isNextItem(todo, timestamp)) {
        // если задача есть в next - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в next
            state.idsByFilterId[nextKey] = [...nextIds, todo.todo_id];
        }
    } else {
        // если задача была в next - удаляем ее
        if (idx > -1) {
            const newNext = [...nextIds];

            newNext.splice(idx, 1);
            state.idsByFilterId[nextKey] = newNext;
        }
    }
}
