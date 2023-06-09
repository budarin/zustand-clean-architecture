import { getState } from '../state.ts';
import { validateCategory } from './validateCategory.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function deleteCategory(request: Request): Promise<Response> {
    try {
        const state = getState();
        const data = await request.json();
        const { entity, error } = validateCategory(data, state, 'delete');

        if (entity) {
            // если нет такой записи в categories - ошибка
            const idx = state.categories.findIndex((item) => item.category_id === entity.category_id);
            const category = state.categories[idx];

            state.categories.splice(idx, 1);

            return respondWithResult(category);
        } else {
            return respondWithError(error);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
