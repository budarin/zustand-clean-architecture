import { state } from '../state.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { validateCategoryEntity } from './validateCategoryEntity.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function createCategory(request: Request): Promise<Response> {
    try {
        const data = await request.json();
        const { entity, error } = validateCategoryEntity(data, state);

        if (error !== undefined) {
            return respondWithError(error);
        } else {
            const ids = state?.categories?.map((item) => item.category_id) || [1];
            const newId = Math.max(...ids);
            const newCategory = { ...entity, category_id: newId };

            state?.categories?.push(newCategory);

            return respondWithResult(newCategory);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return respondWithError(message, stack);
    }
}
