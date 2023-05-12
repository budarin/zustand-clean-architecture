export const navigationFilterTypes = {
    filter: 'filter',
    category: 'category',
} as const;

export const inboxKey = 'inbox';
export const todayKey = 'today';
export const nextKey = 'next';
export const recycleBinKey = 'recycleBin';

export const navigationFilters = {
    [todayKey]: 'Сегодня',
    [nextKey]: 'Завтра',
    [inboxKey]: 'Черновики',
    [recycleBinKey]: 'Корзина',
};

export type NavigationFiltersKey = keyof typeof navigationFilters;

export const navigationFilterIcons = {
    [todayKey]: 'today.png',
    [nextKey]: 'next.png',
    [inboxKey]: 'inbox.png',
    [recycleBinKey]: 'trash.gif',
};
