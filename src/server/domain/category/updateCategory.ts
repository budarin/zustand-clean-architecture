import { getState } from '../state.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { validateCategory } from './validateCategory.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function updateCategory(request: Request): Promise<Response> {
    try {
        const state = getState();
        const data = await request.json();
        const { entity, error } = validateCategory(data, state, 'update');

        if (entity) {
            const idx = state.categories.findIndex((item) => item.category_id === entity.category_id);

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
