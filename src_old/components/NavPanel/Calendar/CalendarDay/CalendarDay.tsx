import React, { memo } from 'react';

import { cn } from '../../../classNames';

import { type CalendarDayType } from '..';

import './index.css';

const currentDayCN = cn('CalendarDay');

const CalendarDay = memo(function (props: CalendarDayType) {
    const { day, value, todosCount, selected, inCurrentMonth, isToday, isWeekend } = props;
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
            tabIndex={0}
            data-todos={todosCount ? todosCount : ''}
        >
            {day}
        </div>
    );
});

CalendarDay.displayName = 'CalendarDay';

export default CalendarDay;
