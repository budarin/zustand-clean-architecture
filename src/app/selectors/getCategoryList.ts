import { useTodoStore } from '../../domain/store/store.tsx';

const getCategoryListSelector = (state: TodosState) => state.categories.ids;

export const getCategoryList = () => useTodoStore(getCategoryListSelector);
