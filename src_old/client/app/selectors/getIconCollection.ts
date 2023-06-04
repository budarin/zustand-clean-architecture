import { shallow } from 'zustand/shallow';
import { useTodoStore } from '../../domain/entities/store';

const getIconCollectionSelector = (state: TodosState) => Object.values(state.icons.byId);

export const getIconCollection = () => useTodoStore(getIconCollectionSelector, shallow);
