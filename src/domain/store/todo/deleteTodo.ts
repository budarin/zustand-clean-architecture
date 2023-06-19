import { useTodoStore } from '../../store/store';

export function deleteTodo(id: Todo['todo_id']): JsonRpcResult<Todo['todo_id']> {
    const state = useTodoStore.getState();

    const newState = { ...useTodoStore.getState() };
    const { [id]: del, ...rest } = state.todos.byId;

    newState.todos.byId = rest;

    const ids = state.todos.ids;
    let idx = ids.indexOf(id);

    if (idx > -1) {
        newState.todos.ids = ids.filter((item) => item !== id);
    }

    useTodoStore.setState(newState);

    return {
        result: id,
    };
}
