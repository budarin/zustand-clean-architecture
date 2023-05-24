import React, { MouseEventHandler, useCallback, useState } from 'react';

import { getStateForPrevOrNextMonth } from './utils/getStateForPrevOrNextMonth.tsx';
import { getStateForNewSelectedDate } from './utils/getStateForNewSelectedDate.tsx';
import { areParsedDatesEqualByMonthAndYear } from './utils/areParsedDatesEqualByMonthAndYear.tsx';

// components
import CalendarDay from './CalendarDay/CalendarDay.tsx';
import { CalendarHeader } from './CalendarHeader/CalendarHeader.tsx';
import { CalendarWeekNamesRow } from './CalendarWeekNamesRow/CalendarWeekNamesRow.tsx';

import './index.css';

export type CalendarDayContainerType = {
    day: number;
    value: number;
    inCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
    onSelectDate: MouseEventHandler<HTMLDivElement>;
    dayComponent: React.ComponentType<CalendarDayType>;
};

export type CalendarDayType = {
    day: number;
    value: number;
    inCurrentMonth: boolean;
    isToday: boolean;
    isWeekend: boolean;
    selected: boolean;
    onSelectDate: MouseEventHandler<HTMLDivElement>;
};

type Calendar = {
    selected: boolean;
    dayContainer: React.ComponentType<CalendarDayContainerType>;
};

const weekendsDays = [0, 6];

function Calendar(props: Calendar) {
    const { selected, dayContainer: CalendarDayContainer } = props;

    const todayDate = new Date();
    const todayDay = {
        day: todayDate.getDate(),
        month: todayDate.getMonth(),
        year: todayDate.getFullYear(),
    };

    const [{ title, currentDay, daysCount, startDay }, setState] = useState(getStateForNewSelectedDate(todayDate));
    const { month, year, day } = currentDay;

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

    const onSelectDate: MouseEventHandler<HTMLDivElement> = useCallback((event) => {
        const timestamp = Number((event.target as HTMLElement).dataset.date);
        const selectedDt = new Date(timestamp);

        if (month !== selectedDt.getMonth()) {
            setState(getStateForNewSelectedDate(selectedDt));
        }
    }, []);

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
                    const theDate = date.getDate();
                    const theDay = date.getDay();
                    const key = date.valueOf();

                    return (
                        <CalendarDayContainer
                            key={key}
                            day={theDate}
                            value={key}
                            inCurrentMonth={month === date.getMonth()}
                            isToday={todayDay.day === theDate && todayDay.month === date.getMonth()}
                            isWeekend={theDay === 0 || theDay === 6}
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
