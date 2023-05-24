import { memo } from 'react';

import { cn } from '../../classNames';
import { type CalendarDayType } from '..';
import './index.css';

const currentDayCN = cn('Calendar-Day');

const CalendarDay = memo(function (props: CalendarDayType) {
    const { day, value, todosCount, selected, inCurrentMonth, isToday, isWeekend, onSelectDate } = props;

    todosCount && console.log('Todos on:', new Date(value), todosCount);

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
});

CalendarDay.displayName = 'CalendarDay';

export default CalendarDay;
