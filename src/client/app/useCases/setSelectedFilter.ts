import { useTodoStore } from '../domain/store';
import { createFilterNavFilter } from '../action_creators/createFilterNavFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export const setSelectedFilter = (key: string, filter: string) =>
    setNavigationFilter(createFilterNavFilter(key, filter));
