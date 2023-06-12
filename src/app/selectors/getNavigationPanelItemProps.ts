import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../../domain/store/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../domain/entities/navigationFilter/index.ts';

type GetNavPanelItemPropsSelector = (
    id: NavigationFilterKey,
    navigationType: NavigationFilterType,
) => (
    state: TodosState,
) =>
    | { isCategory: true; title: string; icon: string; selected: boolean }
    | { isCategory: false; title: string; icon: string; selected: boolean }
    | undefined;

export const getNavPanelItemPropsSelector: GetNavPanelItemPropsSelector = (id, navigationType) =>
    useCallback(
        (state: TodosState) => {
            const filter = state.navigationFilter;
            const isCategory = navigationFilterTypes.category === navigationType;

            if (isCategory) {
                const category = state.categories.byId[id as Id];

                if (!category) {
                    return;
                }

                return {
                    isCategory,
                    title: category.category,
                    icon: state.icons.byId[category.icon_id].icon_name,
                    selected: category.category === filter.title,
                };
            } else {
                const title = navigationFilters[id as NavigationFiltersKey];

                if (!title) {
                    return;
                }

                return {
                    isCategory,
                    title,
                    icon: navigationFilterIcons[id as NavigationFiltersKey],
                    selected: id === filter.key,
                };
            }
        },
        [id, navigationType],
    );

export const getNavigationPanelItemProps = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useTodoStore(getNavPanelItemPropsSelector(id, navigationType), shallow);
