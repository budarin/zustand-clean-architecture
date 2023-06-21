import { getState } from '../state.ts';
import { respondWith404 } from '../../utils/respondWith404.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { validateCategoryEntity } from './validateCategoryEntity.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function updateCategory(request: Request): Promise<Response> {
    try {
        const state = getState();
        const data = await request.json();
        const { entity, error } = validateCategoryEntity(data, state, 'update');

        if (entity) {
            if (state.categories.length === 0) {
                return respondWith404();
            }

            // если нет такой записи в categories - ошибка
            const idx = state.categories.findIndex((item) => item.category_id === entity.category_id);

            if (idx === -1) {
                return respondWith404();
            }

            state.categories[idx] = entity;

            return respondWithResult(entity);
        } else {
            return respondWithError(error);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
