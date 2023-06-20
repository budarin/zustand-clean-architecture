import { useTodoStore } from '../../domain/store/store.tsx';
import { vibrate } from '../../services/contracts/Notification/index.ts';
import { createCategoryNavFilter } from '../../domain/store/navigationFilter/createCategoryNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCategory(id: Id, category: string): JsonRpcResult<NavigationFilter> {
    const result = setNavigationFilter(createCategoryNavFilter(id, category));
    vibrate();

    return result;
}
