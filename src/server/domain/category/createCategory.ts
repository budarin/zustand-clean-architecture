import { responseWithError } from '../../utils/responseWithError.ts';
import { validateCategoryEntity } from './validateCategoryEntity.ts';
import { responseWithResult } from '../../utils/responseWithResult.ts';

export async function createCategory(request: Request, state: Entities) {
    try {
        const data = await request.json();
        const { entity, error } = validateCategoryEntity(data, state);

        if (error !== undefined) {
            responseWithError(error);
        } else {
            const ids = state?.categories?.map((item) => item.category_id) || [1];
            const newId = Math.max(...ids);
            const newCategory = { ...entity, category_id: newId };

            state?.categories?.push(newCategory);

            return responseWithResult(newCategory);
        }
    } catch (error) {
        const { message, stack } = error as Error;

        return responseWithError(message, stack);
    }
}
