import { MouseEventHandler, useCallback } from 'react';

import { useTodoStore } from '../../domain/store';
import { getNavigationFilterWithCalendarDate, navigationFilterTypes } from '../../domain/navigationFilter';

// components
import Calendar from '../../../ui/Calendar';
import CalendarDayContainer from './CalendarDayContainer';

const selectedDateSelector = (state: TodosState) => {
    if (state.navigationFilter.type === navigationFilterTypes.calendar) {
        return new Date(state.navigationFilter.key);
    }
};

function CalendarContainer() {
    const selectedDate = useTodoStore(selectedDateSelector);

    const onCalendarSelectDate: MouseEventHandler<HTMLDivElement> = useCallback(function (event) {
        const setNavigationFilter = useTodoStore.getState().setNavigationFilter;
        const selectedDateTimestamp = Number((event.target as HTMLElement).dataset.date);
        const selectedDate = new Date(selectedDateTimestamp);

        setNavigationFilter(getNavigationFilterWithCalendarDate(selectedDate));
    }, []);

    return (
        <Calendar selectedDate={selectedDate} onSelectDate={onCalendarSelectDate} dayContainer={CalendarDayContainer} />
    );
}

export default CalendarContainer;
