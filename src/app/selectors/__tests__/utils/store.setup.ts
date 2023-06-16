import { act } from '@testing-library/react-hooks';
import { useTodoStore } from '../../../../domain/store/store.tsx';
import { serverInitialState } from '../../../../server/serverInitialState.ts';

let initialState: TodosState;

function setupStore() {
    const { icons, statuses, categories, todos } = serverInitialState;
    const { _addIcon, _addStatus, _addCategory, _addTodo } = useTodoStore.getState();

    icons?.forEach((icon) => {
        const { result, error } = _addIcon(icon);
    });

    statuses?.forEach((status) => {
        _addStatus(status);
    });

    categories?.forEach((category) => {
        _addCategory(category);
    });

    todos?.forEach((todo) => {
        _addTodo(todo);
    });

    initialState = useTodoStore.getState();
}

setupStore();

export const resetStore = () => {
    act(() => useTodoStore.setState(initialState, true));
};
