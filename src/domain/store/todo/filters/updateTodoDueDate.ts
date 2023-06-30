import { isNotExists } from '../../../entities/validation_utils/isNotExists';

// обновляем todos.idsByByDueDate
export function updateTodoDueDate(state: TodoState, newTodo: ExtendedTodo, oldTodo?: ExtendedTodo) {
    // если при создании у новой задачи нет due_date
    // или при обновлении due_date не изменилась - выходим и она находится в списке просроченных задач
    if (
        (oldTodo && isTodoExistsInOverdue(state, oldTodo) && oldTodo.due_date === newTodo.due_date) ||
        isNotExists(newTodo.due_date)
    ) {
        return;
    }

    // если у старой задачи была due_date - удалаяем задачу из списка этого дня
    if (oldTodo?.due_date) {
        const newIds = [...state.idsByDueDate[oldTodo.due_date_ts]];
        newIds.splice(newIds.indexOf(oldTodo.todo_id), 1);
        state.idsByDueDate[oldTodo.due_date_ts] = newIds;
    }

    // добавляем задачу в списка дня due_date
    if (newTodo.due_date) {
        // если нет еще такой даты
        if (isNotExists(state.idsByDueDate[newTodo.due_date_ts])) {
            // создаем новый массив с todo_id
            state.idsByDueDate[newTodo.due_date_ts] = [newTodo.todo_id];
        } else {
            // добавляем массив
            if (state.idsByDueDate[newTodo.due_date_ts].includes(newTodo.todo_id) === false) {
                state.idsByDueDate[newTodo.due_date_ts] = [...state.idsByDueDate[newTodo.due_date_ts], newTodo.todo_id];
            }
        }
    }
}

function isTodoExistsInOverdue(state: TodoState, todo: ExtendedTodo): boolean {
    if (todo.due_date_ts === undefined) {
        return false;
    }

    return Boolean((state.idsByDueDate[todo.due_date_ts] || []).includes(todo.todo_id));
}
