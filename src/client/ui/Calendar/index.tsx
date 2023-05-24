import React, { MouseEventHandler, useCallback, useState } from 'react';

import { getStateForPrevOrNextMonth } from './utils/getStateForPrevOrNextMonth.tsx';
import { getStateForNewSelectedDate } from './utils/getStateForNewSelectedDate.tsx';
import { areParsedDatesEqualByMonthAndYear } from './utils/areParsedDatesEqualByMonthAndYear.tsx';

// components
import CalendarDay from './CalendarDay/CalendarDay.tsx';
import { CalendarHeader } from './CalendarHeader/CalendarHeader.tsx';
import { CalendarWeekNamesRow } from './CalendarWeekNamesRow/CalendarWeekNamesRow.tsx';

import './index.css';

export type CalendarDayType = {
    date: Date;
    value: number;
    selected: boolean;
    calendarMonth: number;
    todayDay: ParsedDate;
    onSelectDate: MouseEventHandler<HTMLDivElement>;
};

export type CalendarDayContainerType = {
    date: Date;
    value: number;
    calendarMonth: number;
    todayDay: ParsedDate;
    onSelectDate: MouseEventHandler<HTMLDivElement>;
    dayComponent: React.ComponentType<CalendarDayType>;
};

type Calendar = {
    selected: boolean;
    dayContainer: React.ComponentType<CalendarDayContainerType>;
};

function Calendar(props: Calendar) {
    const { selected, dayContainer: CalendarDayContainer } = props;

    const todayDate = new Date();
    const todayDay = {
        day: todayDate.getDate(),
        month: todayDate.getMonth(),
        year: todayDate.getFullYear(),
    };

    const [{ title, currentDay, daysCount, startDay }, setState] = useState(getStateForNewSelectedDate(todayDate));
    const { month, year } = currentDay;

    const setPrevMonth = useCallback(() => {
        const prevMonthDate = new Date(year, month - 1, 1);
        setState(getStateForPrevOrNextMonth(prevMonthDate));
    }, [year, month]);

    const setNextMonth = useCallback(() => {
        const nextMonthDate = new Date(year, month + 1, 1);
        setState(getStateForPrevOrNextMonth(nextMonthDate));
    }, [year, month]);

    const setToday = () => {
        setState(getStateForPrevOrNextMonth(todayDate));
    };

    const onSelectDate: MouseEventHandler<HTMLDivElement> = (event) => {
        const timestamp = Number((event.target as HTMLElement).dataset.date);
        const selectedDt = new Date(timestamp);

        if (month !== selectedDt.getMonth()) {
            setState(getStateForNewSelectedDate(selectedDt));
        }
    };

    return (
        <div className="Calendar">
            <CalendarHeader
                selected={selected}
                title={title}
                handlePrevMonth={setPrevMonth}
                handleNextMonth={setNextMonth}
                handleToday={setToday}
                disableTodayButton={areParsedDatesEqualByMonthAndYear(todayDay, currentDay)}
            />

            <CalendarWeekNamesRow />

            <div className="Calendar-Body">
                {Array.from({ length: daysCount }, (_, index) => {
                    const date = new Date(startDay.year, startDay.month, startDay.day + index);
                    const key = date.valueOf();

                    return (
                        <CalendarDayContainer
                            key={key}
                            date={date}
                            value={key}
                            calendarMonth={month}
                            todayDay={todayDay}
                            dayComponent={CalendarDay}
                            onSelectDate={onSelectDate}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Calendar;
