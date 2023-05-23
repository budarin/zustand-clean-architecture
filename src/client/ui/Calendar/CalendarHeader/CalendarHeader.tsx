import { memo } from 'react';
import { cn } from '../../classNames.ts';

import './index.css';

const headerCN = cn('Calendar-Header');

type CalendarHeader = {
    selected: boolean;
    title: string;
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    handleToday: () => void;
    disableTodayButton: boolean;
};

export const CalendarHeader = memo(function CalendarHeader(props: CalendarHeader) {
    const { selected, title, disableTodayButton, handlePrevMonth, handleNextMonth, handleToday } = props;

    const headerSelectedCN = headerCN({ selected });

    return (
        <div className={headerSelectedCN}>
            <div className="Calendar-HeadNav">
                <button
                    className="Calendar-PrevMonth Calendar-Button"
                    onClick={handlePrevMonth}
                    title="Предыдущий месяц"
                >
                    {'<'}
                </button>
                <span className="Calendar-Title" title="Выбранный месяц">
                    {title}
                </span>
                <button
                    className="Calendar-NextMonth Calendar-Button"
                    onClick={handleNextMonth}
                    title="Следующий месяц"
                >
                    {'>'}
                </button>
            </div>
            <button className="Calendar-TodayButton" onClick={handleToday} disabled={disableTodayButton}>
                Сегодня
            </button>
        </div>
    );
});

CalendarHeader.displayName = 'CalendarHeader';
