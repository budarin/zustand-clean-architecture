import { getDateFromDateTime } from './getDateFromDateTime.ts';

export function getOnlyDateTimestamp(dateStr: string): Timestamp {
    return getDateFromDateTime(new Date(dateStr)).valueOf();
}
