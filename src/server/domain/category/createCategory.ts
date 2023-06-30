import { getState } from '../state.ts';
import { validateCategory } from './validateCategory.ts';
import { respondWithError } from '../../utils/respondWithError.ts';
import { respondWithResult } from '../../utils/respondWithResult.ts';

export async function createCategory(
    request: Request,
): Promise<TypedResponse<JsonRpcResult<NewCategory, string | undefined>>> {
    try {
        const state = getState();
        const data = await request.json();
        const { entity, error } = validateCategory(data, state, 'create');

        if (entity) {
            const ids = state.categories.map((item) => item.category_id) || [1];
            const newId = Math.max(...ids) + 1;
            const newCategory = {
                ...entity,
                category_id: newId,
            };

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
