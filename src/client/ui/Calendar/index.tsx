import { MouseEventHandler, useState } from 'react';

import { cn } from '../classNames.ts';
import { getStateForPrevOrNextMonth } from './utils/getStateForPrevOrNextMonth.tsx';
import { getStateForNewSelectedDate } from './utils/getStateForNewSelectedDate.tsx';

import './index.css';
import { CalendarWeekNamesRow } from './CalendarWeekNamesRow.tsx';
import { CalendarHeader } from './CalendarHeader.tsx';

let todayDate = new Date();

const currentDayCN = cn('Calendar-Day');

type Calendar = {
    selected: boolean;
};

function Calendar(props: Calendar) {
    const { selected } = props;

    const [state, setState] = useState(getStateForNewSelectedDate(todayDate));

    const setPrevMonth = () => {
        const prevMonthDate = new Date(state.year, state.month - 1, 1);
        setState(getStateForPrevOrNextMonth(prevMonthDate));
    };

    const setNextMonth = () => {
        const nextMonthDate = new Date(state.year, state.month + 1, 1);
        setState(getStateForPrevOrNextMonth(nextMonthDate));
    };

    const setToday = () => {
        setState(getStateForPrevOrNextMonth(todayDate));
    };

    function dateIsEqual(d1: Date, d2: Date): boolean {
        const yearsAreEqual = d1.getFullYear() === d2.getFullYear();
        const monthsAreEqual = d1.getMonth() === d2.getMonth();

        return yearsAreEqual && monthsAreEqual;
    }

    const onSelectDate: MouseEventHandler<HTMLDivElement> = (event) => {
        setState(getStateForNewSelectedDate(new Date(Number((event.target as HTMLElement).dataset.date))));
    };

    return (
        <div className="Calendar">
            <CalendarHeader
                selected={selected}
                title={state.title}
                handlePrevMonth={setPrevMonth}
                handleNextMonth={setNextMonth}
            />

            <CalendarWeekNamesRow />

            <div className="Calendar-Body">
                {Array.from({ length: state.daysCount }, (_, index) => {
                    const { selected, startDate, month } = state;

                    const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + index);
                    const date_day = date.getDate();
                    const date_month = date.getMonth();
                    const date_year = date.getFullYear();
                    const isToday =
                        date_month === todayDate.getMonth() &&
                        date_day === todayDate.getDate() &&
                        date_year === todayDate.getFullYear();

                    const className = currentDayCN({
                        other_month: date_month !== month,
                        selected:
                            date_month === selected.getMonth() &&
                            date_day === selected.getDate() &&
                            date_year === selected.getFullYear(),
                        today: isToday,
                    });

                    const key = date.valueOf();

                    return (
                        <div
                            className={className}
                            key={key}
                            tabIndex={0}
                            data-date={key}
                            onClick={onSelectDate}
                            title={isToday ? 'Сегодня' : ''}
                        >
                            {date_day}
                        </div>
                    );
                })}
            </div>
            <button
                className="Calendar-TodayButton Calendar-Button"
                onClick={setToday}
                disabled={dateIsEqual(todayDate, state.currentDate)}
            >
                Вернуться к сегодня
            </button>
        </div>
    );
}

export default Calendar;
