import { useTodoStore } from '../domain/store';
import { createCategoryNavFilter } from '../action_creators/createCategoryNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export const setSelectedCategory = (id: Id, category: string) =>
    setNavigationFilter(createCategoryNavFilter(id, category));
