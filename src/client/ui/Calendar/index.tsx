import { useEffect, useState } from 'react';

import { getDaysInMoth } from './getDaysInMoth.tsx';
import { getDateDiffInDays } from './getDateDiffInDays.tsx';
import { capitalizeFirstLetter } from '../../../common/capitalizeFirstLetter.ts';

import './index.css';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
const intl = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' });

const weekDayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

function getFirstMonthDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getCalendarTitle(date: Date): string {
    const currentMonthName = capitalizeFirstLetter(new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date));
    const currentYear = date.getFullYear();

    return `${currentMonthName}, ${currentYear}`;
}

function getFirstDate(date: Date): Date {
    const currentYear = date.getFullYear();
    const currenMonthNo = date.getMonth();

    const firstMonthDateWeekNo = date.getDay();

    if (firstMonthDateWeekNo === 1) {
        return date;
    } else {
        const lastDayOfPrevMonth = getDaysInMoth(currentYear, currenMonthNo);
        return new Date(currentYear, currenMonthNo - 1, lastDayOfPrevMonth - firstMonthDateWeekNo + 2);
    }
}

function getLastDate(date: Date): Date {
    const currentYear = date.getFullYear();
    const currenMonthNo = date.getMonth();

    const lastCurrentMonthDay = getDaysInMoth(currentYear, currenMonthNo - 1);
    const lastMonthDate = new Date(currentYear, currenMonthNo, lastCurrentMonthDay);
    const lastDateWeekDay = lastMonthDate.getDay();
    const lastDate = new Date(currentYear, currenMonthNo, lastCurrentMonthDay + (7 - lastDateWeekDay));

    return lastDate;
}

function getCalendarDaysCount(date1: Date, date2: Date): number {
    return getDateDiffInDays(date1, date2);
}

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

type State = {
    date: Date;
    title: string;
    startDate: Date;
    endDate: Date;
    daysCount: number;
};

function Calendar() {
    const today = new Date();

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
        setState(getNewState(getFirstMonthDate(today)));
    };

    function dateIsEqual(d1: Date, d2: Date): boolean {
        return (
            d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
        );
    }

    console.log('render');
    console.table(state);

    return (
        <div className="Calendar">
            <div className="Calendar-Header">
                <button className="Calendar-PrevMonth" onClick={setPrevMonth}>
                    {'<'}
                </button>
                <span className="Calendar-Title">{state.title}</span>
                <button className="Calendar-NextMonth" onClick={setNextMonth}>
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
            <button className="Calendar-TodayButton" onClick={setToday} disabled={dateIsEqual(today, state.date)}>
                Сегодня
            </button>
        </div>
    );
}

export default Calendar;
