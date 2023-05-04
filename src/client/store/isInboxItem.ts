export function isInboxItem(todo: Todo): boolean {
    return todo.due_date == undefined && todo.category_id === undefined && !todo.deleted && !todo.completed;
}
