import { act } from '@testing-library/react-hooks';
import { useTodoStore } from '../../../store/store.tsx';
import { serverInitialState } from '../../../../infrastructure/server/serverInitialState.ts';

const { icons, statuses, categories, todos } = serverInitialState;
const { _addIcon, _addStatus, _addCategory, _addTodo } = useTodoStore.getState();

icons?.forEach((icon) => {
    try {
        _addIcon(icon);
    } catch (error) {
        console.error(error);
    }
});

statuses?.forEach((status) => {
    try {
        _addStatus(status);
    } catch (error) {
        console.error(error);
    }
});

categories?.forEach((category) => {
    try {
        _addCategory(category);
    } catch (error) {
        console.error(error);
    }
});

todos?.forEach((todo) => {
    try {
        _addTodo(todo);
    } catch (error) {
        console.error(error);
    }
});

const initialState = useTodoStore.getState();

beforeEach(() => {
    act(() => useTodoStore.setState(initialState, true));
});
