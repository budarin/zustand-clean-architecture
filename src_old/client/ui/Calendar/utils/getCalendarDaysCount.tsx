import { getDatesDiffInDays } from '../../../../../src/utils/dateTime/getDatesDiffInDays.ts';

export function getCalendarDaysCount(date1: Date, date2: Date): number {
    // includs date1 abd date2
    return getDatesDiffInDays(date1, date2) + 1;
}
