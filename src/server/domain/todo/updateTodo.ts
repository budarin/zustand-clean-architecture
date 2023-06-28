import { getState } from '../state.ts';
import { respondWith404 } from '../../utils/respondWith404.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';
import { validateTodo } from './validateTodo.ts';

export async function updateTodo(request: Request): Promise<Response> {
    try {
        const state = getState();
        const data = await request.json();
        const { entity, error } = validateTodo(data, state, 'update');

        if (entity) {
            // если нет такой записи в todos - ошибка
            const idx = state.categories.findIndex((item) => item.category_id === entity.category_id);
            if (idx === -1) {
                return respondWith404();
            }

            state.todos[idx] = entity;

            return respondWithResult(entity);
        } else {
            return respondWithError(error);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
