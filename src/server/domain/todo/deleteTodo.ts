import { getState } from '../state.ts';
import { respondWith404 } from '../../utils/respondWith404.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function deleteTodo(request: Request): Promise<Response> {
    try {
        const { todo_id } = await request.json();

        // если нет todo_id - ошибка
        if (todo_id === undefined) {
            return respondWithError('Отсутствует todo_id');
        }

        const state = getState();

        // если нет такой записи в todos - ошибка
        const idx = state.todos.findIndex((item) => item.todo_id === todo_id);

        if (idx === -1) {
            return respondWith404();
        }

        const todo = state.todos[idx];
        state.todos.splice(idx, 1);

        return respondWithResult(todo);
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
