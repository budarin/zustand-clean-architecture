import { MouseEventHandler, memo, useCallback } from 'react';

import { TodosStoreState, useTodoStore } from '../../domain/store';
import { getNavigationFilterWithCalendarDate, navigationFilterTypes } from '../../domain/navigationFilter';

import { type CalendarDayContainerType } from '../../../ui/Calendar';

const navFilterSelector = (state: TodosState) => state.navigationFilter;
const setNavFilterSelector = (state: TodosStoreState) => state.setNavigationFilter;
const todosCountSelector = (timestamp: TimeStamp) =>
    useCallback((state: TodosState) => state.todos.idsByDueDate[timestamp]?.length || 0, [timestamp]);

const CalendarDayContainer = function (props: CalendarDayContainerType) {
    const {
        day,
        value,
        inCurrentMonth,
        isToday,
        isWeekend,
        dayComponent: Day,
        onSelectDate: onCalendarSelectDate,
    } = props;

    const navFilter = useTodoStore(navFilterSelector);
    const todosCount = useTodoStore(todosCountSelector(value));
    const setNavigationFilter = useTodoStore(setNavFilterSelector);

    let selected = false;

    if (navFilter.type === navigationFilterTypes.calendar) {
        selected = value === navFilter.key;
    }

    const onSelectDate: MouseEventHandler<HTMLDivElement> = useCallback(
        (event) => {
            const selectedDateTimestamp = Number((event.target as HTMLElement).dataset.date);
            const selectedDate = new Date(selectedDateTimestamp);

            setNavigationFilter(getNavigationFilterWithCalendarDate(selectedDate));
            onCalendarSelectDate(event);
        },
        [onCalendarSelectDate],
    );

    return (
        <Day
            day={day}
            value={value}
            todosCount={todosCount}
            selected={selected}
            isToday={isToday}
            isWeekend={isWeekend}
            inCurrentMonth={inCurrentMonth}
            onSelectDate={onSelectDate}
        />
    );
};

export default CalendarDayContainer;
