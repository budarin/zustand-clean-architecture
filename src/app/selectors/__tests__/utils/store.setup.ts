import { act } from '@testing-library/react';
import { useTodoStore } from '../../../../domain/store/store.tsx';

import { todoSamples } from './todos.ts';

let initialState: TodosState;

function setupStore() {
    const { _addTodo } = useTodoStore.getState();

    todoSamples.forEach((todo) => {
        _addTodo(todo);
    });

    initialState = useTodoStore.getState();
}

setupStore();

export const resetStore = () => {
    act(() => useTodoStore.setState(initialState, true));
};
