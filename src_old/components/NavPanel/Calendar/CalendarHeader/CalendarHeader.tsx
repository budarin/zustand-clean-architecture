import React, { memo } from 'react';
import { cn } from '../../../classNames.ts';

import './index.css';

const headerCN = cn('CalendarHeader');

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
            <div className="CalendarHeader-MonthsNavigation">
                <button
                    className="CalendarHeader-PrevMonth Calendar-Button"
                    onClick={handlePrevMonth}
                    title="Предыдущий месяц"
                >
                    {'<'}
                </button>
                <span className="CalendarHeader-Title" title="Выбранный месяц">
                    {title}
                </span>
                <button
                    className="CalendarHeader-NextMonth Calendar-Button"
                    onClick={handleNextMonth}
                    title="Следующий месяц"
                >
                    {'>'}
                </button>
            </div>
            <div className="CalendarHeader-TodayButtonContainer">
                <button
                    className="CalendarHeader-TodayButton"
                    onClick={handleToday}
                    disabled={disableTodayButton}
                    title="Перейти к текущему месяцу"
                >
                    Сегодня
                </button>
            </div>
        </div>
    );
});

CalendarHeader.displayName = 'CalendarHeader';
