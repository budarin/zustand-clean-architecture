import { useTodoStore } from '../../store/store';

export function deleteCategory(id: Category['category_id']): JsonRpcResult<Category['category_id'], number> {
    const state = useTodoStore.getState();

    const { [id]: deleted, ...restById } = state.categories.byId;

    if (Object.keys(state.todos.idsByCategoryId).includes(String(id))) {
        return {
            error: {
                code: 500,
                error: `Нельзя удалить категорию "${deleted.category}": в этой категории есть задачи!`,
                data: id,
            },
        };
    }

    const newState = { ...state };

    newState.categories.byId = restById;

    const ids = state.categories.ids;
    const idx = ids.indexOf(id);

    if (idx > -1) {
        newState.categories.ids = ids.filter((item) => item !== id);
    }

    // удалить в todos idsByCategoryId так как там нет todos
    const { [id]: del, ...restIdsByCategoryId } = state.todos.idsByCategoryId;
    newState.todos.idsByCategoryId = restIdsByCategoryId;

    useTodoStore.setState(newState);

    return {
        result: id,
    };
}
