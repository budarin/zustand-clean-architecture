import { useTodoStore } from '../../domain/store/store.tsx';
import { vibrate } from '../../services/contracts/Notification/index.ts';
import { createCalendarNavigationFilter } from '../../domain/store/navigationFilter/createCalendarNavigationFilter.ts';

const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

export function setSelectedCalendarDate(date: Date): JsonRpcResult<NavigationFilter> {
    const result = setNavigationFilter(createCalendarNavigationFilter(date));
    vibrate();

    return result;
}
