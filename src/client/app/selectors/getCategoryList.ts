import { useTodoStore } from '../../domain/entities/store';

const getCategoryListSelector = (state: TodosState) => state.categories.ids;

export const getCategoryList = () => useTodoStore(getCategoryListSelector);
