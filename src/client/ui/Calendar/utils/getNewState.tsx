import { getLastDate } from './getLastDate.tsx';
import { getFirstDate } from './getFirstDate.tsx';
import { getCalendarTitle } from './getCalendarTitle.tsx';
import { getFirstMonthDate } from './getFirstMonthDate.tsx';
import { getCalendarDaysCount } from './getCalendarDaysCount.tsx';

export function getStateForPrevOrNextMonth(newDate: Date) {
    return function (state: CalendarState): CalendarState {
        const date = getFirstMonthDate(newDate);
        const title = getCalendarTitle(date);
        const startDate = getFirstDate(date);
        const endDate = getLastDate(date);

        return {
            selected: state.selected,
            currentDate: date,
            month: date.getMonth(),
            year: date.getFullYear(),
            title,
            startDate,
            endDate,
            daysCount: getCalendarDaysCount(startDate, endDate),
        };
    };
}
