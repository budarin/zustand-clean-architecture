import { isNotExists } from '../../../../common/validation_utils/isNotExists';

export function updateIdsByDueDate(oldTodo: Todo, newTodo: Todo, state: TodoState) {
    // обновляем todos.idsByByDueDate

    const due_date = new Date(todo.due_date);
    const dateWithoutTime = new Date(due_date.getFullYear(), due_date.getMonth(), due_date.getDate()).valueOf();

    // если нет еще такой даты
    if (isNotExists(state.idsByDueDate[dateWithoutTime])) {
        // добавляем массив
        state.idsByDueDate[dateWithoutTime] = [todo.todo_id];
    } else {
    }
}
