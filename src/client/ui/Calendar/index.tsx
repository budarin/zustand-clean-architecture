import { useState } from 'react';

import { cn } from '../classNames.ts';

import { getStateForPrevOrNextMonth } from './utils/getNewState.tsx';
import { getLastDate } from './utils/getLastDate.tsx';
import { getFirstDate } from './utils/getFirstDate.tsx';
import { getCalendarTitle } from './utils/getCalendarTitle.tsx';
import { getFirstMonthDate } from './utils/getFirstMonthDate.tsx';
import { getCalendarDaysCount } from './utils/getCalendarDaysCount.tsx';

import './index.css';

const weekDayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

const currentDayCN = cn('Calendar-Day');

function Calendar() {
    const [state, setState] = useState(() => {
        const today = new Date();
        const date = getFirstMonthDate(new Date());
        const title = getCalendarTitle(date);
        const startDate = getFirstDate(date);
        const endDate = getLastDate(date);
        const daysCount = getCalendarDaysCount(startDate, endDate);

        return {
            selected: today,
            currentDate: date,
            month: today.getMonth(),
            year: today.getFullYear(),
            title,
            startDate,
            endDate,
            daysCount,
        };
    });

    const setPrevMonth = () => {
        const prevMonthDate = new Date(state.year, state.month - 1, 1);
        setState(getStateForPrevOrNextMonth(prevMonthDate));
    };

    const setNextMonth = () => {
        const nextMonthDate = new Date(state.year, state.month + 1, 1);
        setState(getStateForPrevOrNextMonth(nextMonthDate));
    };

    const setToday = () => {
        setState(getStateForPrevOrNextMonth(new Date()));
    };

    function dateIsEqual(d1: Date, d2: Date): boolean {
        const yearsAreEqual = d1.getFullYear() === d2.getFullYear();
        const monthsAreEqual = d1.getMonth() === d2.getMonth();

        return yearsAreEqual && monthsAreEqual;
    }

    return (
        <div className="Calendar">
            <div className="Calendar-Header">
                <button className="Calendar-PrevMonth Calendar-Button" onClick={setPrevMonth} title="Предыдущий месяц">
                    {'<'}
                </button>
                <span className="Calendar-Title" title="Выбранный месяц">
                    {state.title}
                </span>
                <button className="Calendar-NextMonth Calendar-Button" onClick={setNextMonth} title="Следующий месяц">
                    {'>'}
                </button>
            </div>
            <div className="Calendar-WeekNames">
                {weekDayNames.map((name) => {
                    return (
                        <span className="Calendar-WeekName" key={name}>
                            {name}
                        </span>
                    );
                })}
            </div>
            <div className="Calendar-Body">
                {Array.from({ length: state.daysCount }, (_, index) => {
                    const { selected, startDate, month } = state;

                    const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + index);
                    const day = date.getDate();
                    const className = currentDayCN({
                        other_month: date.getMonth() !== month,
                    });

                    return (
                        <div className={className} key={date.valueOf()} tabIndex={0}>
                            {day}
                        </div>
                    );
                })}
            </div>
            <button
                className="Calendar-TodayButton Calendar-Button"
                onClick={setToday}
                disabled={dateIsEqual(new Date(), state.currentDate)}
                title="Вернуться к выбранной дате"
            >
                К выбранной дате
            </button>
        </div>
    );
}

export default Calendar;
