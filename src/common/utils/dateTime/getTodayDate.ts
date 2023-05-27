import { getDateFromDateTime } from './getDateFromDateTime.ts';

export function getTodayDate() {
    return getDateFromDateTime(new Date());
}
