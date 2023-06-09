import { act } from '@testing-library/react-hooks';
import { useTodoStore } from '../../../store/store.tsx';
import { serverInitialState } from '../../../../infrastructure/server/serverInitialState.ts';

const { icons, statuses, categories, todos } = serverInitialState;
const { _addIcon, _addStatus, _addCategory, _addTodo } = useTodoStore.getState();

icons?.forEach((icon) => {
    _addIcon(icon);
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

const initialState = useTodoStore.getState();

beforeEach(() => {
    act(() => useTodoStore.setState(initialState, true));
});
