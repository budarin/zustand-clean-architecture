import { getDatesDiffInDays } from '../../../../common/utils/dateTime/getDatesDiffInDays.ts';

export function getCalendarDaysCount(date1: Date, date2: Date): number {
    return getDatesDiffInDays(date1, date2);
}
