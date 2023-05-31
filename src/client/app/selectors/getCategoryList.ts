import { useTodoStore } from '../../domain/entities/store';

const selector = (state: TodosState) => state.categories.ids;

export const getCategoryList = () => useTodoStore(selector);
