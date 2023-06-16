import { useTodoStore } from '../../domain/store/store.tsx';
import { createFilterNavFilter } from '../../domain/entities/navigationFilter/createFilterNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedFilter(key: string, filter: string): JsonRpcResult<NavigationFilter> {
    return setNavigationFilter(createFilterNavFilter(key, filter));
}
