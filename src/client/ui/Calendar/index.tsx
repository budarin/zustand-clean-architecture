import { MouseEvent, MouseEventHandler, useState } from 'react';

import { cn } from '../classNames.ts';

import { getLastDate } from './utils/getLastDate.tsx';
import { getFirstDate } from './utils/getFirstDate.tsx';
import { getCalendarTitle } from './utils/getCalendarTitle.tsx';
import { getFirstMonthDate } from './utils/getFirstMonthDate.tsx';
import { getStateForPrevOrNextMonth } from './utils/getNewState.tsx';
import { getCalendarDaysCount } from './utils/getCalendarDaysCount.tsx';

import './index.css';

const weekDayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

let todayDate = new Date();
const currentDayCN = cn('Calendar-Day');

function setNewState(newDate: Date) {
    const date = getFirstMonthDate(newDate);
    const title = getCalendarTitle(date);
    const startDate = getFirstDate(date);
    const endDate = getLastDate(date);
    const daysCount = getCalendarDaysCount(startDate, endDate);

    return {
        selected: newDate,
        currentDate: date,
        month: date.getMonth(),
        year: date.getFullYear(),
        title,
        startDate,
        endDate,
        daysCount,
    };
}

function Calendar() {
    const [state, setState] = useState(setNewState(todayDate));

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
        setState(setNewState(new Date(Number((event.target as HTMLElement).dataset.date))));
    };

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
                    const date_day = date.getDate();
                    const date_month = date.getMonth();
                    const isToday = date_month === todayDate.getMonth() && date_day === todayDate.getDate();

                    const className = currentDayCN({
                        other_month: date_month !== month,
                        selected: date_month === selected.getMonth() && date_day === selected.getDate(),
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
