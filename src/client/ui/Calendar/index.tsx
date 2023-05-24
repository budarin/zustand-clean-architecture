import React, { MouseEventHandler, memo, useCallback, useState } from 'react';

import { getNewCalendarState } from './utils/getNewCalendarState.tsx';
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
    selectedDate?: Date;
    dayContainer: React.ComponentType<CalendarDayContainerType>;
};

const todayDate = new Date();
const todayDay = {
    day: todayDate.getDate(),
    month: todayDate.getMonth(),
    year: todayDate.getFullYear(),
};

const Calendar = memo(function (props: Calendar) {
    const { selectedDate, dayContainer: CalendarDayContainer } = props;

    const [state, setState] = useState(getNewCalendarState(selectedDate || todayDate));
    const { title, currentDay, daysCount, startDay } = state;
    const { month, year } = currentDay;

    const setPrevMonth = useCallback(() => {
        const prevMonthDate = new Date(year, month - 1, 1);
        setState(getNewCalendarState(prevMonthDate));
    }, [year, month]);

    const setNextMonth = useCallback(() => {
        const nextMonthDate = new Date(year, month + 1, 1);
        setState(getNewCalendarState(nextMonthDate));
    }, [year, month]);

    const setToday = useCallback(() => {
        setState(getNewCalendarState(todayDate));
    }, []);

    const onSelectDate: MouseEventHandler<HTMLDivElement> = useCallback(
        (event) => {
            const timestamp = Number((event.target as HTMLElement).dataset.date);
            const selectedDt = new Date(timestamp);

            console.log('onSelectDate', currentDay, selectedDt);

            if (currentDay.month !== selectedDt.getMonth()) {
                setState(getNewCalendarState(selectedDt));
            }
        },
        [currentDay],
    );

    return (
        <div className="Calendar">
            <CalendarHeader
                selected={selectedDate !== undefined}
                title={title}
                handlePrevMonth={setPrevMonth}
                handleNextMonth={setNextMonth}
                handleToday={setToday}
                disableTodayButton={areParsedDatesEqualByMonthAndYear(todayDay, currentDay)}
            />

            <CalendarWeekNamesRow />

            <div className="Calendar-Body">
                {Array.from({ length: daysCount }, (_, index) => {
                    const date = new Date(startDay.year, startDay.month, startDay.day);
                    date.setDate(startDay.day + index);

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
});

Calendar.displayName = 'Calendar';

export default Calendar;
