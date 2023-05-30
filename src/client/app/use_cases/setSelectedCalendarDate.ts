import { useTodoStore } from '../domain/store';
import { createCalendarNavigationFilter } from '../action_creators/createCalendarNavigationFilter';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCalendarDate(date: Date): void {
    return setNavigationFilter(createCalendarNavigationFilter(date));
}
