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

function getWeeksCount(date1: Date, date2: Date): number {
    return getDateDiffInDays(date1, date2) / 7;
}

function Calendar() {
    const today = new Date();
    const [date, setDate] = useState(getFirstMonthDate(today));
    const [title, setTitle] = useState(getCalendarTitle(date));
    const [startDate, setStartDate] = useState(getFirstDate(date));
    const [endDate, setEndDate] = useState(getLastDate(date));
    const [weeks, setWeeks] = useState(getWeeksCount(startDate, endDate));

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            setTitle(getCalendarTitle(date));
            setStartDate(getFirstDate(date));
            setEndDate(getLastDate(date));
            setWeeks(getWeeksCount(startDate, endDate));
        }

        return () => {
            mounted = false;
        };
    }, [date]);

    const setPrevMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        setDate(newDate);
    };

    const setNextMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        setDate(newDate);
    };

    const setToday = () => {
        setDate(new Date());
    };

    function dateIsEqual(d1: Date, d2: Date): boolean {
        return (
            d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate()
        );
    }

    return (
        <div className="Calendar">
            <div className="Calendar-Header">
                <span className="Calendar-MonthNavigation">
                    <button onClick={setPrevMonth}>{'<'}</button>
                    <span className="Calendar-Title">{title}</span>
                    <button onClick={setNextMonth}>{'>'}</button>
                </span>
                <button className="Calendar-TodayButton" onClick={setToday} disabled={dateIsEqual(today, date)}>
                    Сегодня
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
            <div></div>
        </div>
    );
}

export default Calendar;
