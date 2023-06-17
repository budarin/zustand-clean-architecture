import { act } from '@testing-library/react-hooks';
import { useTodoStore } from '../../../../domain/store/store.tsx';
import { serverInitialState } from '../../../../server/serverInitialState.ts';

let initialState: TodosState;

function setupStore() {
    const { todos } = serverInitialState;
    const { _addTodo } = useTodoStore.getState();

    todos?.forEach((todo) => {
        _addTodo(todo);
    });

    initialState = useTodoStore.getState();
}

setupStore();

export const resetStore = () => {
    act(() => useTodoStore.setState(initialState, true));
};
