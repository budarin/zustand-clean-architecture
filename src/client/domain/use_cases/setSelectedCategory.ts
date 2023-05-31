import { useTodoStore } from '../entities/store.tsx';
import { createCategoryNavFilter } from '../../app/action_creators/createCategoryNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCategory(id: Id, category: string): void {
    return setNavigationFilter(createCategoryNavFilter(id, category));
}
