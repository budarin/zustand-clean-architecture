import { getDaysInMoth } from './getDaysInMoth.tsx';

export function getFirstDate(date: Date): Date {
    const currentYear = date.getFullYear();
    const currenMonthNo = date.getMonth();

    const firstMonthDateWeekNo = date.getDay();

    if (firstMonthDateWeekNo === 1) {
        return date;
    } else {
        const lastDayOfPrevMonth = getDaysInMoth(currentYear, currenMonthNo);
        return new Date(currentYear, currenMonthNo - 1, lastDayOfPrevMonth - firstMonthDateWeekNo + 2);
    }
}
