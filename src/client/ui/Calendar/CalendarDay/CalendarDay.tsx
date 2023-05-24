import { memo } from 'react';

import { cn } from '../../classNames';
import { areDaysEqual } from '../utils/areDaysEqual';

import { type CalendarDayType } from '..';

import './index.css';

const weekendDays = [0, 6];
const currentDayCN = cn('Calendar-Day');

function CalendarDay(props: CalendarDayType) {
    const { date, value, selected, calendarMonth, todayDay, onSelectDate } = props;

    const day = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };

    const isToday = areDaysEqual(day, todayDay);

    const className = currentDayCN({
        other_month: day.month !== calendarMonth,
        selected,
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

const CalendarDayMemoized = memo(CalendarDay);
CalendarDayMemoized.displayName = 'CalendarDay';

export default CalendarDayMemoized;
