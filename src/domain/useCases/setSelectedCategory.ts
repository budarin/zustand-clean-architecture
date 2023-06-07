import { createCategoryNavFilter } from '../../domain/actionCreators/createCategoryNavFilter.ts';
import { useTodoStore } from '../../domain/store/store.tsx';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCategory(id: Id, category: string): void {
    return setNavigationFilter(createCategoryNavFilter(id, category));
}
