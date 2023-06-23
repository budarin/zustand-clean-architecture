import { shallow } from 'zustand/shallow';
import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает массив описаний иконок из store
 */

const getIconCollectionSelector = (state: TodosState): Icon[] => {
    return Object.values(state.icons.byId);
};

export const getIconCollection = (): Icon[] => {
    return useTodoStore(getIconCollectionSelector, shallow);
};
