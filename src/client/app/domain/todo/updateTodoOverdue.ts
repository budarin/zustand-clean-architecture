import { isNotExists } from '../../../../common/validation_utils/isNotExists';

// обновляем todos.idsByByDueDate
export function updateTodoOverdue(state: TodoState, newTodo: Todo, oldTodo?: Todo) {
    const due_date = new Date(todo.due_date);
    const dateWithoutTime = new Date(due_date.getFullYear(), due_date.getMonth(), due_date.getDate()).valueOf();

    // если нет еще такой даты
    if (isNotExists(state.idsByDueDate[dateWithoutTime])) {
        // добавляем массив
        state.idsByDueDate[dateWithoutTime] = [todo.todo_id];
    } else {
    }
}
