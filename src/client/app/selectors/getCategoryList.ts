import { useTodoStore } from '../domain/store';

const selector = (state: TodosState) => state.categories.ids;

export const getCategoryList = () => useTodoStore(selector);
