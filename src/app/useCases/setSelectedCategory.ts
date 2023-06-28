import { useTodoStore } from '../../domain/store/store.tsx';
import { vibrate } from '../../services/contracts/Notification/index.ts';
import { createCategoryNavigationFilter } from '../../domain/store/navigationFilter/createCategoryNavigationFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCategory(id: Id, category: string): JsonRpcResult<NavigationFilter, UnknownObject> {
    const result = setNavigationFilter(createCategoryNavigationFilter(id, category));
    vibrate();

    return result;
}
