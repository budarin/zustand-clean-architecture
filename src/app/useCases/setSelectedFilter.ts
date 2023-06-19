import { useTodoStore } from '../../domain/store/store.tsx';
import { createFilterNavFilter } from '../../domain/store/navigationFilter/createFilterNavFilter.ts';
import { vibrate } from '../../services/contracts/Notification/index.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedFilter(key: string, filter: string): JsonRpcResult<NavigationFilter> {
    const result = setNavigationFilter(createFilterNavFilter(key, filter));
    vibrate();

    return result;
}
