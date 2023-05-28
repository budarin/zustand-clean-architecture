import { useCallback } from 'react';
import { useTodoStore } from '../domain/store';
import { navigationFilterTypes } from '../domain/navigationFilter/index.ts';

const selector = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useCallback(
        (state: TodosState) => {
            return navigationType === navigationFilterTypes.category
                ? state.todos.idsByCategoryId[id as Id]?.length || 0
                : state.todos.idsByFilterId[id].length;
        },
        [id, navigationType],
    );

export const getTodoCountForNavPanelItem = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useTodoStore(selector(id, navigationType));
