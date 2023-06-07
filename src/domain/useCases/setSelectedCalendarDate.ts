import { useTodoStore } from '../store/store.tsx';
import { vibrate } from '../../infrastructure/services/Notification/index.ts';
import { createCalendarNavigationFilter } from '../entities/navigationFilter/createCalendarNavigationFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCalendarDate(date: Date): void {
    setNavigationFilter(createCalendarNavigationFilter(date));
    vibrate();
}
