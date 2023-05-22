import { exists } from '../../validation_utils/exists';

export function isOverdueItem(todo: Todo): boolean {
    const today = new Date().valueOf();

    return exists(todo.due_date) && todo.due_date < today && exists(todo.completed) && todo.completed === false;
}
