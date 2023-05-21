import { useState } from 'react';

import { cn } from '../classNames.ts';

import { getNewState } from './utils/getNewState.tsx';
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
        const today = getFirstMonthDate(new Date());
        const title = getCalendarTitle(today);
        const startDate = getFirstDate(today);
        const endDate = getLastDate(today);
        const daysCount = getCalendarDaysCount(startDate, endDate);

        return {
            date: today,
            month: today.getMonth(),
            title,
            startDate,
            endDate,
            daysCount,
        };
    });

    const setPrevMonth = () => {
        const today = new Date(state.date.getFullYear(), state.date.getMonth() - 1, 1);
        setState(getNewState(today));
    };

    const setNextMonth = () => {
        const today = new Date(state.date.getFullYear(), state.date.getMonth() + 1, 1);
        setState(getNewState(today));
    };

    const setToday = () => {
        setState(getNewState(getFirstMonthDate(new Date())));
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
                    const { startDate, month } = state;

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
                disabled={dateIsEqual(new Date(), state.date)}
                title="Вернуться к выбранной дате"
            >
                К выбранной дате
            </button>
        </div>
    );
}

export default Calendar;
