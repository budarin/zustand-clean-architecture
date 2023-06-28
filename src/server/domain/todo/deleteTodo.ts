import { getState } from '../state.ts';
import { respondWith404 } from '../../utils/respondWith404.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';
import { validateTodo } from './validateTodo.ts';

export async function deleteTodo(request: Request): Promise<Response> {
    try {
        const state = getState();
        const data = await request.json();
        const { entity, error } = validateTodo(data, state, 'delete');

        if (entity) {
            // если нет такой записи в todos - ошибка
            const idx = state.todos.findIndex((item) => item.todo_id === entity.todo_id);
            if (idx === -1) {
                return respondWith404();
            }

            const todo = state.todos[idx];
            state.todos.splice(idx, 1);

            return respondWithResult(todo);
        } else {
            return respondWithError(error);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
