import { useCallback } from 'react';
import { useTodoStore } from '../domain/store';

const selector = (id: NavigationFilterKey, isCategory: boolean) =>
    useCallback(
        (state: TodosState) => {
            return isCategory
                ? state.todos.idsByCategoryId[id as Id]?.length || 0
                : state.todos.idsByFilterId[id].length;
        },
        [id, isCategory],
    );

export const getTodoCountByCategory = (id: NavigationFilterKey, isCategory: boolean) =>
    useTodoStore(selector(id, isCategory));
