import { useTodoStore } from '../entities/store';
import { vibrate } from '../../../../src/infrastructure/services/Notification/index.ts';
import { createCalendarNavigationFilter } from '../action_creators/createCalendarNavigationFilter';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCalendarDate(date: Date): void {
    setNavigationFilter(createCalendarNavigationFilter(date));
    vibrate();
}
