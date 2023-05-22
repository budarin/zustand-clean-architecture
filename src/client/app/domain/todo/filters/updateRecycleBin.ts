import { recycleBinKey } from '../../navigationFilter';
import { isRecycleBinItem } from '../../../../../common/domain/todo/isRecycleBinItem';

export function updateRecycleBin(state: TodoState, todo: Todo): void {
    const recycleBin = state.idsByFilterId[recycleBinKey];
    const idx = recycleBin.indexOf(todo.todo_id);

    if (isRecycleBinItem(todo)) {
        // если задача есть в recycleBin - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в overdue
            state.idsByFilterId[recycleBinKey] = [...recycleBin, todo.todo_id];
        }
    } else {
        // если задача была в recycleBin - удаляем ее
        if (idx > -1) {
            const newRecycleBin = [...recycleBin];

            newRecycleBin.splice(idx, 1);
            state.idsByFilterId[recycleBinKey] = newRecycleBin;
        }
    }
}
