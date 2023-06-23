import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает список id всех категорий задач
 */

const getCategoryListSelector = (state: TodosState): readonly number[] => state.categories.ids;

export const getCategoryList = () => useTodoStore(getCategoryListSelector);
