import { useEffect, useState } from 'react';

import './index.css';
import { getFirstMonthDate } from './getFirstMonthDate.tsx';
import { getCalendarTitle } from './getCalendarTitle.tsx';
import { getFirstDate } from './getFirstDate.tsx';
import { getLastDate } from './getLastDate.tsx';
import { getCalendarDaysCount } from './getCalendarDaysCount.tsx';

type State = {
    date: Date;
    title: string;
    startDate: Date;
    endDate: Date;
    daysCount: number;
};

const weekDayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

function getNewState(newDate: Date) {
    return function (): State {
        const today = newDate;
        const title = getCalendarTitle(today);
        const startDate = getFirstDate(today);
        const endDate = getLastDate(today);

        return {
            date: today,
            title,
            startDate,
            endDate,
            daysCount: getCalendarDaysCount(startDate, endDate),
        };
    };
}

function Calendar() {
    const [state, setState] = useState(() => {
        const today = getFirstMonthDate(new Date());
        const title = getCalendarTitle(today);
        const startDate = getFirstDate(today);
        const endDate = getLastDate(today);
        const daysCount = getCalendarDaysCount(startDate, endDate);

        return {
            date: today,
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
                    // startDate.setDate(startDate.getDate() + index);

                    return (
                        <div className="Calendar-Day" key={index} tabIndex={0}>
                            {index}
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
                Вернуться к выбору
            </button>
        </div>
    );
}

export default Calendar;
