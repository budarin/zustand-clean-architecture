export function isOverdueItem(todo: ExtendedTodo): boolean {
    const today = new Date().valueOf();

    return todo.due_date != undefined && todo.due_date_time_ts < today && todo.completed === false;
}
