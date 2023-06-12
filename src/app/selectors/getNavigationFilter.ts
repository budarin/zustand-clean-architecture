import { useTodoStore } from '../../domain/store/store.tsx';

const getNavigationFilterSelector = (state: TodosState) => state.navigationFilter;

export const getNavigationFilter = () => useTodoStore(getNavigationFilterSelector);
