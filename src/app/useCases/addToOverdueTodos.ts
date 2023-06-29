import { useTodoStore } from '../../domain/store/store';
import { overdueKey } from '../../domain/store/navigationFilter';

export function addToOverdueTodos(id: Category['category_id']): JsonRpcResult<Category['category_id']> {
    const newState = { ...useTodoStore.getState() };
    newState.todos.idsByFilterId[overdueKey] = [...newState.todos.idsByFilterId[overdueKey], id];

    useTodoStore.setState(newState);

    return {
        result: id,
    };
}
