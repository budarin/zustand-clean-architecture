import React, { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../../domain/store/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../domain/store/navigationFilter/index.ts';

type GetNavPanelItemPropsSelector =
    | { isCategory: true; title: string; icon: string; selected: boolean }
    | { isCategory: false; title: string; icon: string; selected: boolean }
    | undefined;

/**
 * Возвращает свойства для отрисовки эелементов навигации или undefined:
 *
 * isCategory - boolean (фильтр/категория задач)
 * title - Название категории.фильтра
 * icon - имя иконки
 * selected - boolean
 *
 */

export const getNavPanelItemPropsSelector = (navigationType: NavigationFilterType, id: NavigationFilterKey) =>
    useCallback(
        (state: TodosState): GetNavPanelItemPropsSelector => {
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

export const getNavigationPanelItemProps = (
    navigationType: NavigationPanelItemType,
    id: NavigationFilterKey,
): GetNavPanelItemPropsSelector => {
    return useTodoStore(getNavPanelItemPropsSelector(navigationType, id), shallow);
};
