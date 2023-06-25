import { useTodoStore } from '../../store/store';
import { validateCategoryEntity } from './validateCategoryEntity';

export function deleteCategory(category: Category): JsonRpcResult<Category, number> {
    const state = useTodoStore.getState();
    const { entity, error } = validateCategoryEntity(category, state, 'delete');

    if (error !== undefined) {
        return {
            error: {
                code: 500,
                error,
            },
        };
    }

    const { category_id } = entity;
    const { [category_id]: deleted, ...restById } = state.categories.byId;

    if (Object.keys(state.todos.idsByCategoryId).includes(String(category_id))) {
        return {
            error: {
                code: 500,
                error: `Нельзя удалить категорию "${deleted.category}": в этой категории есть задачи!`,
                data: category_id,
            },
        };
    }

    const newState = { ...state };

    newState.categories.byId = restById;

    const ids = state.categories.ids;
    const idx = ids.indexOf(category_id);

    if (idx > -1) {
        newState.categories.ids = ids.filter((item) => item !== category_id);
    }

    // удалить в todos idsByCategoryId так как там нет todos
    const { [category_id]: del, ...restIdsByCategoryId } = state.todos.idsByCategoryId;
    newState.todos.idsByCategoryId = restIdsByCategoryId;

    useTodoStore.setState(newState);

    return {
        result: entity,
    };
}
