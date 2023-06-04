import { useTodoStore } from '../../domain/entities/store';

const getNavigationFilterSelector = (state: TodosState) => state.navigationFilter;

export const getNavigationFilter = () => useTodoStore(getNavigationFilterSelector);
