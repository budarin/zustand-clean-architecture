import { useTodoStore } from '../../store.ts';
import { updateFilterCounters } from './utils/updateFilterCounters.ts';
import { updateICategoryCounters } from './utils/updateICategoryCounters.ts';

export function _createTodo(todo: Todo): void {
    return useTodoStore.setState((state) => {
        state.todos.byId = { ...state.todos.byId, [todo.id]: todo };
        state.todos.ids = [...state.todos.ids, todo.id];
        updateICategoryCounters(todo, state.todos);
        updateFilterCounters(todo, state.todos);

        return { ...state };
    });
}

export function _updateTodo(todo: Todo): void {
    return useTodoStore.setState((state) => {
        const newTodo = { ...state.todos.byId[todo.id], ...todo };

        state.todos.byId[todo.id] = newTodo;
        updateICategoryCounters(newTodo, state.todos);
        updateFilterCounters(newTodo, state.todos);

        return { ...state };
    });
}

export function _deleteTodo(id: Todo['id']): void {
    return useTodoStore.setState((state) => {
        const { [id]: del, ...rest } = state.todos.byId;
        state.todos.byId = rest;

        const ids = state.todos.ids;
        let idx = ids.indexOf(id);
        if (idx > -1) {
            state.todos.ids = ids.filter((item) => item !== id);
        }

        return { ...state };
    });
}
