import { getLastDate } from './getLastDate.tsx';
import { getFirstDate } from './getFirstDate.tsx';
import { getCalendarTitle } from './getCalendarTitle.tsx';
import { getFirstMonthDate } from './getFirstMonthDate.tsx';
import { getCalendarDaysCount } from './getCalendarDaysCount.tsx';

export function getStateForNewSelectedDate(newDate: Date): CalendarState {
    const date = getFirstMonthDate(newDate);
    const title = getCalendarTitle(date);
    const startDate = getFirstDate(date);
    const endDate = getLastDate(date);
    const daysCount = getCalendarDaysCount(startDate, endDate);

    return {
        currentDay: {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        },
        title,
        startDay: {
            day: startDate.getDate(),
            month: startDate.getMonth(),
            year: startDate.getFullYear(),
        },
        daysCount,
    };
}
