import { createCalendarNavigationFilter } from '../action_creators/createCalendarNavigationFilter';
import { useTodoStore } from '../domain/store';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export const setCalendarSelectedDate = (date: Date) => setNavigationFilter(createCalendarNavigationFilter(date));
