import { cn } from '../../classNames.ts';

import './index.css';

const headerCN = cn('Calendar-Header');

type CalendarHeader = {
    selected: boolean;
    title: string;
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
};

export function CalendarHeader(props: CalendarHeader) {
    const { selected, title, handlePrevMonth, handleNextMonth } = props;

    const headerSelectedCN = headerCN({ selected });

    return (
        <div className={headerSelectedCN}>
            <button className="Calendar-PrevMonth Calendar-Button" onClick={handlePrevMonth} title="Предыдущий месяц">
                {'<'}
            </button>
            <span className="Calendar-Title" title="Выбранный месяц">
                {title}
            </span>
            <button className="Calendar-NextMonth Calendar-Button" onClick={handleNextMonth} title="Следующий месяц">
                {'>'}
            </button>
        </div>
    );
}
