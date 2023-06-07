import { useTodoStore } from '../store/store.tsx';
import { createFilterNavFilter } from '../entities/navigationFilter/createFilterNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedFilter(key: string, filter: string): void {
    return setNavigationFilter(createFilterNavFilter(key, filter));
}
