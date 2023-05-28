import { shallow } from 'zustand/shallow';
import { useTodoStore } from '../domain/store';

const selector = (state: TodosState) => Object.values(state.icons.byId);

export const getIconCollection = () => useTodoStore(selector, shallow);
