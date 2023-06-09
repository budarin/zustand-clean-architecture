import { useTodoStore } from '../store.tsx';
import { validateCategory } from './validateCategory.ts';

export function addCategory(category: UnknownObject): JsonRpc<Category, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateCategory(category, state, 'add');

    if (entity !== undefined) {
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
