import { isNotExists } from '../../../../common/validation_utils/isNotExists';

// обновляем todos.idsByByDueDate
export function updateTodoDueDate(state: TodoState, newTodo: Todo, oldTodo?: Todo) {
    // если при создании у новой задачи нет due_date
    // или при обновлении due_date не изменилась - выходим
    if ((oldTodo && oldTodo.due_date === newTodo.due_date) || isNotExists(newTodo.due_date)) {
        return;
    }

    // если у старой задачи была due_date - удалаяем задачу из списка этого дня
    if (oldTodo?.due_date) {
        const old_due_date = new Date(newTodo.due_date);
        const oldTimestamp = new Date(
            old_due_date.getFullYear(),
            old_due_date.getMonth(),
            old_due_date.getDate(),
        ).valueOf();

        const newIds = [...state.idsByDueDate[oldTimestamp]];
        newIds.splice(newIds.indexOf(oldTodo.todo_id), 1);
        state.idsByDueDate[oldTimestamp] = newIds;
    }

    // добавляем задачу в списка дня due_date
    if (newTodo.due_date) {
        const new_due_date = new Date(newTodo.due_date);
        const newTimestamp = new Date(
            new_due_date.getFullYear(),
            new_due_date.getMonth(),
            new_due_date.getDate(),
        ).valueOf();

        // если нет еще такой даты
        if (isNotExists(state.idsByDueDate[newTimestamp])) {
            // создаем новый массив с todo_id
            state.idsByDueDate[newTimestamp] = [newTodo.todo_id];
        } else {
            // добавляем массив
            state.idsByDueDate[newTimestamp] = [...state.idsByDueDate[newTimestamp], newTodo.todo_id];
        }
    }
}
