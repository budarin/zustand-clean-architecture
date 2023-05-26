import { useCallback } from 'react';

import { useTodoStore } from '../../domain/store';
import { navigationFilterTypes } from '../../domain/navigationFilter';

import { type CalendarDayContainerType } from '../../../ui/Calendar';

const navFilterSelector = (state: TodosState) => state.navigationFilter;
const todosCountSelector = (timestamp: TimeStamp) =>
    useCallback((state: TodosState) => state.todos.idsByDueDate[timestamp]?.length || 0, [timestamp]);

const CalendarDayContainer = function (props: CalendarDayContainerType) {
    const { day, value, inCurrentMonth, isToday, isWeekend, dayComponent: Day } = props;

    const navFilter = useTodoStore(navFilterSelector);
    const todosCount = useTodoStore(todosCountSelector(value));
    const selected = navFilter.type === navigationFilterTypes.calendar && value === navFilter.key;

    return (
        <Day
            day={day}
            value={value}
            todosCount={todosCount}
            selected={selected}
            isToday={isToday}
            isWeekend={isWeekend}
            inCurrentMonth={inCurrentMonth}
        />
    );
};

export default CalendarDayContainer;
