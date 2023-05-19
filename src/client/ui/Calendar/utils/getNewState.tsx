import { getLastDate } from './getLastDate.tsx';
import { getFirstDate } from './getFirstDate.tsx';
import { getCalendarTitle } from './getCalendarTitle.tsx';
import { getCalendarDaysCount } from './getCalendarDaysCount.tsx';

export type State = {
    date: Date;
    title: string;
    startDate: Date;
    endDate: Date;
    daysCount: number;
};

export function getNewState(newDate: Date): () => State {
    return function (): State {
        const today = newDate;
        const title = getCalendarTitle(today);
        const startDate = getFirstDate(today);
        const endDate = getLastDate(today);

        return {
            date: today,
            title,
            startDate,
            endDate,
            daysCount: getCalendarDaysCount(startDate, endDate),
        };
    };
}
