import { capitalizeFirstLetter } from '../../../../common/utils/capitalizeFirstLetter.ts';

export function getCalendarTitle(date: Date): string {
    const currentMonthName = capitalizeFirstLetter(new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date));
    const currentYear = date.getFullYear();

    return `${currentMonthName}, ${currentYear}`;
}
