import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../store/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../entities/navigationFilter/index.ts';

const getNavPanelItemPropsSelector = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
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
    useTodoStore(getNavPanelItemPropsSelector(id, navigationType), shallow);
