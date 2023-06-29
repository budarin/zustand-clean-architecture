import { act } from '@testing-library/react';

import { todoSamples } from './todos.ts';
import { useTodoStore } from '../../domain/store/store.tsx';

let initialState: TodosState;

function setupStore() {
    const { addTodo: _addTodo } = useTodoStore.getState();

    todoSamples.forEach((todo) => {
        _addTodo(todo);
    });

    initialState = useTodoStore.getState();
}

setupStore();

export const resetStoreForReact = () => {
    act(() => useTodoStore.setState(initialState, true));
};

export const resetStore = () => {
    useTodoStore.setState(initialState, true);
};