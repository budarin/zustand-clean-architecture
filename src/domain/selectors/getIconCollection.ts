import { shallow } from 'zustand/shallow';
import { useTodoStore } from '../store/store.tsx';

const getIconCollectionSelector = (state: TodosState) => Object.values(state.icons.byId);

export const getIconCollection = () => useTodoStore(getIconCollectionSelector, shallow);
