export function isRecycleBinItem(todo: Todo): boolean {
    return !!todo.deleted;
}
