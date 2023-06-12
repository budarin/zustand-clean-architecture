import { useTodoStore } from '../../domain/store/store.tsx';
import { createCategoryNavFilter } from '../../domain/entities/navigationFilter/createCategoryNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCategory(id: Id, category: string): void {
    return setNavigationFilter(createCategoryNavFilter(id, category));
}
