import { getState } from '../state.ts';
import { respondWith404 } from '../../utils/respondWith404.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function deleteCategory(request: Request): Promise<Response> {
    try {
        const { category_id } = await request.json();

        // если нет category_id - ошибка
        if (category_id === undefined) {
            return respondWithError('Отсутствует category_id');
        }

        const state = getState();

        // если нет такой записи в categories - ошибка
        const idx = state.categories.findIndex((item) => item.category_id === category_id);

        if (idx === -1) {
            return respondWith404();
        }

        const category = state.categories[idx];

        // если есть связанные todos - ошибка
        const hasLinkedTodos = state.todos.some((item) => item.category_id === category_id);
        if (hasLinkedTodos) {
            return respondWithError('Нельзя удалить Категорию - с ней связаны задачи!', category);
        }

        state.categories.splice(idx, 1);

        return respondWithResult(category);
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
