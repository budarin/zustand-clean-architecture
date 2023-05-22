import { getDateKnownName } from '../../../../common/getDateKnownName';

export const navigationFilterTypes = {
    filter: 'filter',
    category: 'category',
    calendar: 'calendar',
} as const;

export const inboxKey = 'inbox';
export const todayKey = 'today';
export const nextKey = 'next';
export const recycleBinKey = 'recycleBin';
export const overdueKey = 'overdue';

export const navigationFilters = {
    [todayKey]: 'Сегодня',
    [nextKey]: 'Завтра',
    [inboxKey]: 'Черновики',
    [recycleBinKey]: 'Корзина',
    [overdueKey]: 'Просроченные',
};

export type NavigationFiltersKey = keyof typeof navigationFilters;

export const navigationFilterIcons = {
    [todayKey]: 'today.png',
    [nextKey]: 'next.png',
    [inboxKey]: 'inbox.png',
    [recycleBinKey]: 'trash.gif',
    [overdueKey]: 'overdue.svg',
};

export function getNavigationFilterWithCalendarDate(date: Date): CalendarNavigationFilter {
    const dayName = getDateKnownName(date);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return {
        type: 'calendar',
        title: `${dayName ? dayName + ': ' : ''}${date.toLocaleDateString('ru-Ru', options)}`,
        key: date.valueOf(),
    };
}
