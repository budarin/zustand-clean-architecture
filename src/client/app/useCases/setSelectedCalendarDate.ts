import { useTodoStore } from '../domain/store';
import { createCalendarNavigationFilter } from '../action_creators/createCalendarNavigationFilter';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export const setSelectedCalendarDate = (date: Date) => setNavigationFilter(createCalendarNavigationFilter(date));
