import React, { MouseEventHandler, memo, useCallback, useEffect, useState } from 'react';

import usePrevious from '../hooks/usePrevious.ts';
import { areDatesEqual } from './utils/areDatesEqual.ts';
import { getNewCalendarState } from './utils/getNewCalendarState.tsx';
import { setSelectedCalendarDate } from '../../domain/use_cases/setSelectedCalendarDate.ts';
import { areParsedDatesEqualByMonthAndYear } from './utils/areParsedDatesEqualByMonthAndYear.tsx';

// components
import CalendarBody from './CalendarBody/index.tsx';
import { CalendarHeader } from './CalendarHeader/CalendarHeader.tsx';
import { CalendarWeekNamesRow } from './CalendarWeekNamesRow/CalendarWeekNamesRow.tsx';

import './index.css';

const todayDate = new Date();
const todayDay = {
    day: todayDate.getDate(),
    month: todayDate.getMonth(),
    year: todayDate.getFullYear(),
};

export type CalendarDayContainerType = {
    day: number;
    value: number;
    inCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
    dayComponent: React.ComponentType<CalendarDayType>;
};

export type CalendarDayType = {
    day: number;
    value: number;
    todosCount: number;
    inCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
    selected: boolean;
};

type Calendar = {
    selectedDate?: Date;
    onSelectDate: MouseEventHandler<HTMLDivElement>;
    dayContainer: React.ComponentType<CalendarDayContainerType>;
};

const Calendar = memo(function (props: Calendar) {
    const { selectedDate, onSelectDate, dayContainer: CalendarDayContainer } = props;

    const [state, setState] = useState(getNewCalendarState(selectedDate || todayDate));
    const { title, currentDay, daysCount, startDay } = state;
    const { month, year } = currentDay;

    // если календарь отображает не текущий месяц для selectedDate
    // - устанавливаем для календаря текущий месяц как в selectedDate
    // исользуется в случае кода фильтр устанавливается извне календаря
    const prevSelectedDate = usePrevious(selectedDate);
    useEffect(() => {
        if (selectedDate && selectedDate !== prevSelectedDate && selectedDate.getMonth() !== state.currentDay.month) {
            setState(getNewCalendarState(selectedDate));
        }
    }, [selectedDate, prevSelectedDate, state]);

    const setPrevMonth = useCallback(() => {
        const prevMonthDate = new Date(year, month - 1, 1);
        setState(getNewCalendarState(prevMonthDate));
    }, [year, month]);

    const setNextMonth = useCallback(() => {
        const nextMonthDate = new Date(year, month + 1, 1);
        setState(getNewCalendarState(nextMonthDate));
    }, [year, month]);

    const setToday = useCallback(() => {
        setSelectedCalendarDate(todayDate);
        setState(getNewCalendarState(todayDate));
    }, []);

    const onInternalSelectDate: MouseEventHandler<HTMLDivElement> = useCallback(
        (event) => {
            const timestamp = Number((event.target as HTMLElement).dataset.date);
            const selectedDt = new Date(timestamp);

            if (currentDay.month !== selectedDt.getMonth()) {
                setState(getNewCalendarState(selectedDt));
            }

            onSelectDate(event);
        },
        [currentDay, onSelectDate],
    );

    return (
        <div className="Calendar">
            <CalendarHeader
                selected={selectedDate !== undefined}
                title={title}
                handlePrevMonth={setPrevMonth}
                handleNextMonth={setNextMonth}
                handleToday={setToday}
                disableTodayButton={
                    areDatesEqual(selectedDate, todayDate) && areParsedDatesEqualByMonthAndYear(todayDay, currentDay)
                }
            />

            <CalendarWeekNamesRow />

            <CalendarBody
                daysCount={daysCount}
                month={month}
                startDay={startDay}
                todayDay={todayDay}
                onSelectDate={onInternalSelectDate}
                dayContainer={CalendarDayContainer}
            />
        </div>
    );
});

Calendar.displayName = 'Calendar';

export default Calendar;
