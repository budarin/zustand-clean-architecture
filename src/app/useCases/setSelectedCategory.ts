import { useTodoStore } from '../../domain/store/store.tsx';
import { createCategoryNavFilter } from '../../domain/store/navigationFilter/createCategoryNavFilter.ts';
import { vibrate } from '../../services/contracts/Notification/index.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCategory(id: Id, category: string): JsonRpcResult<NavigationFilter> {
    const result = setNavigationFilter(createCategoryNavFilter(id, category));
    vibrate();

    return result;
}
