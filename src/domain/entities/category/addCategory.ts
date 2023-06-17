import { useTodoStore } from '../../store/store';
import { validateCategoryEntity } from './validation';

export function addCategory(category: UnknownObject): JsonRpcResult<Category, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateCategoryEntity(category, state);

    if (entity) {
        if (state.categories.ids.includes(entity.category_id) === true) {
            return {
                error: {
                    code: 500,
                    error: `Нарушение уникальности ключа categories`,
                    data: category,
                },
            };
        }

        const newState = { ...state };

        newState.categories.byId = { ...state.categories.byId, [entity.category_id]: entity };
        newState.categories.ids = [...state.categories.ids, entity.category_id];
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
