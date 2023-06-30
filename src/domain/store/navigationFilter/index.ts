export const filter = 'filter';
export const category = 'category';
export const calendar = 'calendar';
export const navigationFilterTypeValues = [filter, category, calendar];

export const navigationFilterTypes = {
    filter,
    category,
    calendar,
} as const;

export const inboxKey = 'inbox';
export const recycleBinKey = 'recycleBin';
export const overdueKey = 'overdue';
export const navigationFilterKeys = [inboxKey, recycleBinKey, overdueKey];

export const navigationFilters = {
    [inboxKey]: 'Черновики',
    [recycleBinKey]: 'Корзина',
    [overdueKey]: 'Просроченные',
};
export const navigationFilterTitles = [
    navigationFilters[inboxKey],
    navigationFilters[recycleBinKey],
    navigationFilters[overdueKey],
];

export type NavigationFiltersKey = keyof typeof navigationFilters;

export const navigationFilterIcons = {
    [inboxKey]: 'inbox.png',
    [overdueKey]: 'overdue.svg',
    [recycleBinKey]: 'trash.gif',
};

export type NavigationFilterIconsKey = keyof typeof navigationFilterIcons;
