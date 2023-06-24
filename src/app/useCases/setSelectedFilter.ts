import { useTodoStore } from '../../domain/store/store.tsx';
import { vibrate } from '../../services/contracts/Notification/index.ts';
import { createFilterNavigationFilter } from '../../domain/store/navigationFilter/createFilterNavigationFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedFilter(key: string, filter: string): JsonRpcResult<NavigationFilter> {
    const result = setNavigationFilter(createFilterNavigationFilter(key, filter));
    vibrate();

    return result;
}
