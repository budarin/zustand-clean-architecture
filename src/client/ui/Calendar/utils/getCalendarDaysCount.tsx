import { getDateDiffInDays } from './getDateDiffInDays.tsx';

export function getCalendarDaysCount(date1: Date, date2: Date): number {
    return getDateDiffInDays(date1, date2);
}
