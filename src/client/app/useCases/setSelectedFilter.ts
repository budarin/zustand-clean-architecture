import { useTodoStore } from '../domain/store';
import { createFilterNavFilter } from '../action_creators/createFilterNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedFilter(key: string, filter: string): void {
    return setNavigationFilter(createFilterNavFilter(key, filter));
}
