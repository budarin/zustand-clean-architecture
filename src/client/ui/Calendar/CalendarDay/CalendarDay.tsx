import { memo } from 'react';

import { cn } from '../../classNames';
import { type CalendarDayType } from '..';
import './index.css';

const currentDayCN = cn('Calendar-Day');

function CalendarDay(props: CalendarDayType) {
    const { day, value, selected, inCurrentMonth, isToday, isWeekend, onSelectDate } = props;

    const className = currentDayCN({
        other_month: inCurrentMonth === false,
        selected,
        today: isToday,
        weekend: isWeekend,
    });

    return (
        <div
            className={className}
            title={isToday ? 'Сегодня' : ''}
            data-date={value}
            onClick={onSelectDate}
            tabIndex={0}
        >
            {day}
        </div>
    );
}

const CalendarDayMemoized = memo(CalendarDay);
CalendarDayMemoized.displayName = 'CalendarDay';

export default CalendarDayMemoized;
