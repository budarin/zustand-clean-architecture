import { memo } from 'react';
import { cn } from '../../classNames';

import './index.css';

const weekDayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const weekEnds = ['сб', 'вс'];

const weekNameCN = cn('Calendar-WeekName');

export const CalendarWeekNamesRow = memo(function () {
    return (
        <div className="Calendar-WeekNames">
            {weekDayNames.map((name) => {
                return (
                    <span
                        className={weekNameCN({
                            weekend: weekEnds.includes(name),
                        })}
                        key={name}
                    >
                        {name}
                    </span>
                );
            })}
        </div>
    );
});

CalendarWeekNamesRow.displayName = 'CalendarWeekNamesRow';
