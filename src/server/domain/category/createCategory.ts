import { getState } from '../state.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';
import { validateNewCategory } from '../../../domain/entities/category/index.ts';

export async function createCategory(request: Request): Promise<Response> {
    try {
        const data = await request.json();
        const { entity, error } = validateNewCategory(data);

        if (entity) {
            const state = getState();
            const ids = state.categories.map((item) => item.category_id) || [1];
            const newId = Math.max(...ids) + 1;
            const newCategory = { ...entity, category_id: newId };

            state.categories.push(newCategory);

            return respondWithResult(newCategory);
        } else {
            return respondWithError(error);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
