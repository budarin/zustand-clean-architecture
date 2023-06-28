import { useTodoStore } from '../../store/store';
import { validateTodo } from './validateTodo';

export function deleteTodo(todo: UnknownObject): JsonRpcResult<Todo, UnknownObject> {
    const state = useTodoStore.getState();
    const { entity, error } = validateTodo(todo, state, 'delete');

    if (entity) {
        const newState = { ...useTodoStore.getState() };
        const { [entity.todo_id]: del, ...rest } = state.todos.byId;

        newState.todos.byId = rest;

        const ids = state.todos.ids;
        let idx = ids.indexOf(entity.todo_id);

        if (idx > -1) {
            newState.todos.ids = ids.filter((item) => item !== entity.todo_id);
        }

        useTodoStore.setState(newState);

        return {
            result: entity,
        };
    }

    return {
        error: {
            code: 500,
            error,
            data: todo,
        },
    };
}
