import { getDateFromDateTime } from './getDateFromDateTime.ts';

export function getTodayDate(): Date {
    return getDateFromDateTime(new Date());
}
