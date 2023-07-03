import React, { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';
import { navigationFilterTypes } from '../../domain/store/navigationFilter/index.ts';

/**
 * Возвращает количество задач соответствующих категоии или фильтру
 */

const getTodoCountForNavPanelItemSelector = (navigationType: NavigationPanelItemType, id: NavigationFilterKey) =>
    useCallback(
        (state: TodosState): number => {
            return navigationType === navigationFilterTypes.category
                ? state.todos.idsByCategoryId[id as Id]?.length || 0
                : state.todos.idsByFilterId[id]?.length || 0;
        },
        [id, navigationType],
    );

export const getTodoCountForNavPanelItem = (
    navigationType: NavigationPanelItemType,
    id: NavigationFilterKey,
): number => {
    return useTodoStore(getTodoCountForNavPanelItemSelector(navigationType, id));
};
