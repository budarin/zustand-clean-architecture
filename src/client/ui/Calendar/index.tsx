import { MouseEventHandler, useCallback, useState } from 'react';

import { getStateForPrevOrNextMonth } from './utils/getStateForPrevOrNextMonth.tsx';
import { getStateForNewSelectedDate } from './utils/getStateForNewSelectedDate.tsx';

// components
import CalendarDay from './CalendarDay/CalendarDay.tsx';
import { CalendarHeader } from './CalendarHeader/CalendarHeader.tsx';
import { CalendarWeekNamesRow } from './CalendarWeekNamesRow/CalendarWeekNamesRow.tsx';

import './index.css';

function areDateEqualByMonthAndYear(d1: Date, d2: ParsedDate): boolean {
    const yearsAreEqual = d1.getFullYear() === d2.year;
    const monthsAreEqual = d1.getMonth() === d2.month;

    return yearsAreEqual && monthsAreEqual;
}

type Calendar = {
    selected: boolean;
};

function Calendar(props: Calendar) {
    const { selected } = props;

    const todayDate = new Date();
    const todayDay = {
        day: todayDate.getDate(),
        month: todayDate.getMonth(),
        year: todayDate.getFullYear(),
    };

    const [{ title, currentDay, daysCount, startDay, selectedDay }, setState] = useState(
        getStateForNewSelectedDate(todayDate),
    );

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
        setState(getStateForNewSelectedDate(new Date(Number((event.target as HTMLElement).dataset.date))));
    };

    return (
        <div className="Calendar">
            <CalendarHeader
                selected={selected}
                title={title}
                handlePrevMonth={setPrevMonth}
                handleNextMonth={setNextMonth}
                handleToday={setToday}
                disableTodayButton={areDateEqualByMonthAndYear(todayDate, currentDay)}
            />

            <CalendarWeekNamesRow />

            <div className="Calendar-Body">
                {Array.from({ length: daysCount }, (_, index) => {
                    const date = new Date(startDay.year, startDay.month, startDay.day + index);
                    const key = date.valueOf();

                    return (
                        <CalendarDay
                            key={key}
                            date={date}
                            value={key}
                            selectedDay={selectedDay}
                            calendarMonth={month}
                            todayDay={todayDay}
                            onSelectDate={onSelectDate}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Calendar;
