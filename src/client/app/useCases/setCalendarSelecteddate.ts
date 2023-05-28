import { createCalendarNavigationFilter } from '../action_creators/createCalendarNavigationFilter';
import { useTodoStore } from '../domain/store';

// Внимание!!
// Данный селектор можно использовать как в React так и вне его

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export const setCalendarSelectedDate = (date: Date) => setNavigationFilter(createCalendarNavigationFilter(date));
