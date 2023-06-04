import { getDateFromDateTime } from '../../../common/utils/dateTime/getDateFromDateTime.ts';

export function createCalendarNavigationFilter(date: Date): CalendarNavigationFilter {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return {
        type: 'calendar',
        title: `${date.toLocaleDateString('ru-Ru', options)}`,
        key: getDateFromDateTime(date).valueOf(),
    };
}
