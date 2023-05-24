import { MouseEventHandler } from 'react';
import { TodosStoreState, useTodoStore } from '../../domain/store';
import { getNavigationFilterWithCalendarDate, navigationFilterTypes } from '../../domain/navigationFilter';

import { type CalendarDayContainerType } from '../../../ui/Calendar';

const navFilterSelector = (state: TodosState) => state.navigationFilter;
const setNavFilterSelector = (state: TodosStoreState) => state.setNavigationFilter;

function CalendarDayContainer(props: CalendarDayContainerType) {
    const { date, value, calendarMonth, todayDay, dayComponent: Day } = props;
    const navFilter = useTodoStore(navFilterSelector);
    const setNavigationFilter = useTodoStore(setNavFilterSelector);

    let selected = false;

    if (navFilter.type === navigationFilterTypes.calendar) {
        selected = date.valueOf() === navFilter.key;
    }

    const onSelectDate: MouseEventHandler<HTMLDivElement> = (event) => {
        setNavigationFilter(
            getNavigationFilterWithCalendarDate(new Date(Number((event.target as HTMLElement).dataset.date))),
        );
    };

    return (
        <Day
            date={date}
            value={value}
            selected={selected}
            calendarMonth={calendarMonth}
            todayDay={todayDay}
            onSelectDate={onSelectDate}
        />
    );
}

export default CalendarDayContainer;
