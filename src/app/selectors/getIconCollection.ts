import { shallow } from 'zustand/shallow';
import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает массив описаний иконок из store
 */

const getIconCollectionSelector = (state: TodosState): Icon[] => Object.values(state.icons.byId);

export const getIconCollection = () => useTodoStore(getIconCollectionSelector, shallow);
