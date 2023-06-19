import { recycleBinKey } from '../../navigationFilter/index.ts';
import { isRecycleBinItem } from './isRecycleBinItem.ts';

export function updateRecycleBin(state: TodoState, todo: Todo): void {
    const recycleBinIds = state.idsByFilterId[recycleBinKey];
    const idx = recycleBinIds.indexOf(todo.todo_id);

    if (isRecycleBinItem(todo)) {
        // если задача есть в recycleBin - выходим
        if (idx > -1) {
            return;
        } else {
            // добавляем задачу в overdue
            state.idsByFilterId[recycleBinKey] = [...recycleBinIds, todo.todo_id];
        }
    } else {
        // если задача была в recycleBin - удаляем ее
        if (idx > -1) {
            const newRecycleBin = [...recycleBinIds];

            newRecycleBin.splice(idx, 1);
            state.idsByFilterId[recycleBinKey] = newRecycleBin;
        }
    }
}
