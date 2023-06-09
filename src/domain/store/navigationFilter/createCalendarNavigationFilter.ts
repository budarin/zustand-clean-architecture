import { navigationFilterTypes } from './index.ts';
import { getDateFromDateTime } from '../../../utils/dateTime/getDateFromDateTime.ts';

export function createCalendarNavigationFilter(date: Date): CalendarNavigationFilter {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return {
        type: navigationFilterTypes.calendar,
        title: `${date.toLocaleDateString('ru-Ru', options)}`,
        key: getDateFromDateTime(date).valueOf(),
    };
}
