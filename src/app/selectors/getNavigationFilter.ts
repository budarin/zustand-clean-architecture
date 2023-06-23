import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает текущее состояние navigationFilter в store
 */

const getNavigationFilterSelector = (state: TodosState): Readonly<NavigationFilter> => {
    return state.navigationFilter;
};

export const getNavigationFilter = () => useTodoStore(getNavigationFilterSelector);
