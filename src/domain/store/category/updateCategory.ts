import { useTodoStore } from '../../store/store';
import { validateCategory } from './validateCategory';

export function updateCategory(category: UnknownObject): JsonRpcResult<Category, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateCategory(category, state, 'update');

    if (entity) {
        const newState = { ...state };

        newState.categories.byId[entity.category_id] = {
            ...state.categories.byId[entity.category_id],
            ...entity,
        };
        useTodoStore.setState(newState);

        return {
            result: entity,
        };
    }

    return {
        error: {
            code: 500,
            error,
            data: category,
        },
    };
}
