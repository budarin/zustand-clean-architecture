import { useTodoStore } from '../../store/store.tsx';
import { validateCategory } from './validateCategory.ts';

export function deleteCategory(category: UnknownObject): JsonRpc<Category, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateCategory(category, state, 'delete');

    if (entity) {
        const { category_id } = entity;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [category_id]: deleted, ...restById } = state.categories.byId;
        const newState = { ...state };

        newState.categories.byId = restById;

        const ids = state.categories.ids;
        const idx = ids.indexOf(category_id);
        if (idx > -1) {
            newState.categories.ids = ids.filter((item) => item !== category_id);
        }

        // удалить в todos idsByCategoryId так как там нет todos
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [category_id]: del, ...restIdsByCategoryId } = state.todos.idsByCategoryId;
        newState.todos.idsByCategoryId = restIdsByCategoryId;

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
