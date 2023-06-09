import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../store/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../entities/navigationFilter/index.ts';

export const getNavPanelItemPropsSelector = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useCallback(
        (state: TodosState) => {
            const filter = state.navigationFilter;
            const isCategory = navigationFilterTypes.category === navigationType;

            if (isCategory) {
                const category = state.categories.byId[id as Id];

                return {
                    isCategory,
                    title: category.category,
                    selected: category.category === filter.title,
                    icon: state.icons.byId[category.icon_id].icon_name,
                };
            } else {
                return {
                    isCategory,
                    title: navigationFilters[id as NavigationFiltersKey],
                    selected: id === filter.key,
                    icon: navigationFilterIcons[id as NavigationFiltersKey],
                };
            }
        },
        [id, navigationType],
    );

export const getNavPanelItemProps = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useTodoStore(getNavPanelItemPropsSelector(id, navigationType), shallow);
