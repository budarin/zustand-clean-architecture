import { getDateKnownName } from '../../../../common/getDateKnownName';

export const navigationFilterTypes = {
    filter: 'filter',
    category: 'category',
    calendar: 'calendar',
} as const;

export const inboxKey = 'inbox';
export const recycleBinKey = 'recycleBin';
export const overdueKey = 'overdue';

export const navigationFilters = {
    [inboxKey]: 'Черновики',
    [recycleBinKey]: 'Корзина',
    [overdueKey]: 'Просроченные',
};

export type NavigationFiltersKey = keyof typeof navigationFilters;

export const navigationFilterIcons = {
    [inboxKey]: 'inbox.png',
    [overdueKey]: 'overdue.svg',
    [recycleBinKey]: 'trash.gif',
};

export type NavigationFilterIconsKey = keyof typeof navigationFilterIcons;

export function getNavigationFilterWithCalendarDate(date: Date): CalendarNavigationFilter {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return {
        type: 'calendar',
        title: `${date.toLocaleDateString('ru-Ru', options)}`,
        key: date.valueOf(),
    };
}
