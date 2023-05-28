import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../domain/store';
import { navigationFilters, navigationFilterTypes, navigationFilterIcons } from '../domain/navigationFilter';

import type { NavigationFiltersKey } from '../domain/navigationFilter';

const selector = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useCallback(
        (state: TodosState) => {
            let selected = false;
            let title = '';
            let icon = '';

            const filter = state.navigationFilter;
            const isCategory = navigationFilterTypes.category === navigationType;

            if (isCategory) {
                const category = state.categories.byId[id as Id];

                title = category.category;
                selected = title === filter.title;
                icon = state.icons.byId[category.icon_id].icon_name;
            } else {
                title = navigationFilters[id as NavigationFiltersKey];
                selected = id === filter.key;
                icon = navigationFilterIcons[id as NavigationFiltersKey];
            }

            return {
                isCategory,
                title,
                selected,
                icon,
            };
        },
        [id, navigationType],
    );

export const getNavPanelItemProps = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useTodoStore(selector(id, navigationType), shallow);
