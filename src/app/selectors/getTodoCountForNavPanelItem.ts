import { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';
import { navigationFilterTypes } from '../../domain/store/navigationFilter/index.ts';

const getTodoCountForNavPanelItemSelector = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useCallback(
        (state: TodosState) => {
            return navigationType === navigationFilterTypes.category
                ? state.todos.idsByCategoryId[id as Id]?.length || 0
                : state.todos.idsByFilterId[id].length;
        },
        [id, navigationType],
    );

export const getTodoCountForNavPanelItem = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useTodoStore(getTodoCountForNavPanelItemSelector(id, navigationType));
