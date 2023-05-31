import { useTodoStore } from '../../domain/entities/store';

const selector = (state: TodosState) => state.navigationFilter;

export const getNavigationFilter = () => useTodoStore(selector);
