import { MouseEventHandler, useCallback } from 'react';

import { useTodoStore } from '../../domain/store';
import { navigationFilterTypes } from '../../domain/navigationFilter';
import { getNavigationFilterWithCalendarDate } from '../../domain/navigationFilter/getNavigationFilterWithCalendarDate';

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
        // внимание !!!
        // тут мы используем Store вне компонента React
        // в обработчике события нельзя использовать хуки а в Zustand мы имеем доступ к Store !
        const setNavigationFilter = useTodoStore.getState().setNavigationFilter;

        const selectedDateTimestamp = Number((event.target as HTMLElement).dataset.date);
        const selectedDate = new Date(selectedDateTimestamp);

        setNavigationFilter(getNavigationFilterWithCalendarDate(selectedDate));
    }, []);

    return (
        <Calendar
            selectedDate={selectedDate}
            // фишка !!! смотри обработчик
            onSelectDate={onCalendarSelectDate}
            dayContainer={CalendarDayContainer}
        />
    );
}

export default CalendarContainer;
