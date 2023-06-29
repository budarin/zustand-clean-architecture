import { useTodoStore } from '../../domain/store/store';

export function addTodoToOverdueList(id: Category['category_id']): Category['category_id'] {
    const state = useTodoStore.getState();
    const todo = state.todos.byId[id];

    state.updateTodo(todo);

    return id;
}
