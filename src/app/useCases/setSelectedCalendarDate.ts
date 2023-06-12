import { useTodoStore } from '../../domain/store/store.tsx';
import { vibrate } from '../../services/Notification/index.ts';
import { createCalendarNavigationFilter } from '../../domain/entities/navigationFilter/createCalendarNavigationFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCalendarDate(date: Date): void {
    setNavigationFilter(createCalendarNavigationFilter(date));
    vibrate();
}
