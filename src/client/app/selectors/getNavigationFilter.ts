import { useTodoStore } from '../domain/store';

const selector = (state: TodosState) => state.navigationFilter;

export const getNavigationFilter = () => useTodoStore(selector);
