import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает список id всех категорий задач
 */

const getCategoryListSelector = (state: TodosState): readonly number[] => {
    return state.categories.ids;
};

export const getCategoryList = (): readonly number[] => {
    return useTodoStore(getCategoryListSelector);
};
