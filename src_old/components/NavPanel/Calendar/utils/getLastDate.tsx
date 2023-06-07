import { getDaysInMoth } from './getDaysInMoth.tsx';

export function getLastDate(date: Date): Date {
    const currentYear = date.getFullYear();
    const currenMonthNo = date.getMonth();

    const lastCurrentMonthDay = getDaysInMoth(currentYear, currenMonthNo - 1);
    const lastMonthDate = new Date(currentYear, currenMonthNo, lastCurrentMonthDay);
    const lastDateWeekDay = lastMonthDate.getDay() || 7;
    const lastDate = new Date(currentYear, currenMonthNo, lastCurrentMonthDay + (7 - lastDateWeekDay));

    return lastDate;
}
