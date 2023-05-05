import { useTodoStore } from '../domain/store.ts';

export function updateTodo(todo: Todo) {
    useTodoStore.getState().updateTodo(todo);
}
