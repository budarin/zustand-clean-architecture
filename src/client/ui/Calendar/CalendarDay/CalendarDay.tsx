import { MouseEventHandler } from 'react';

import { cn } from '../../classNames';
import { areDaysEqual } from '../utils/areDaysEqual';

import './index.css';

const todayDate = new Date();

const todayDay = {
    day: todayDate.getDate(),
    month: todayDate.getMonth(),
    year: todayDate.getFullYear(),
};

const currentDayCN = cn('Calendar-Day');

const weekendDays = [0, 6];

type CalendarDay = {
    date: Date;
    value: number;
    selectedDay: ParsedDate;
    calendarMonth: number;
    onSelectDate: MouseEventHandler<HTMLDivElement>;
};

function CalendarDay(props: CalendarDay) {
    const { date, value, selectedDay, calendarMonth, onSelectDate } = props;

    const day = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };

    const isToday = areDaysEqual(day, todayDay);

    const className = currentDayCN({
        other_month: day.month !== calendarMonth,
        selected: areDaysEqual(day, selectedDay),
        today: isToday,
        weekend: weekendDays.includes(date.getDay()),
    });

    return (
        <div
            className={className}
            title={isToday ? 'Сегодня' : ''}
            data-date={value}
            onClick={onSelectDate}
            tabIndex={0}
        >
            {day.day}
        </div>
    );
}

export default CalendarDay;
