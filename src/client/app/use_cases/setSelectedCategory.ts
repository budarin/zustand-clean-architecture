import { useTodoStore } from '../domain/store.tsx';
import { createCategoryNavFilter } from '../action_creators/createCategoryNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCategory(id: Id, category: string): void {
    return setNavigationFilter(createCategoryNavFilter(id, category));
}
