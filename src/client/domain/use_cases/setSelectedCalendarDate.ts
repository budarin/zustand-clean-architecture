import { useTodoStore } from '../entities/store';
import { createCalendarNavigationFilter } from '../../app/action_creators/createCalendarNavigationFilter';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCalendarDate(date: Date): void {
    return setNavigationFilter(createCalendarNavigationFilter(date));
}
