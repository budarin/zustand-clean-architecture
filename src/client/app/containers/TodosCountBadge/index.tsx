import React, { useCallback } from 'react';

import { useTodoStore } from '../../domain/store.ts';
import { navigationFilterTypes } from '../../domain/utils/navigationFilter.ts';

import Badge from '../../../ui/Badge/index.tsx';

type TodosCountBadgeProps = {
    id: NavigationFilterKey;
    navigationType: NavigationFilterType;
};

// selectors
const getTodoCount = (id: NavigationFilterKey, isCategory: boolean) =>
    useCallback(
        (state: State) => {
            return isCategory
                ? state.todos.idsByCategoryId[id as Id]?.length || 0
                : state.todos.idsByFilterId[id].length;
        },
        [id, isCategory],
    );

function TodosCountBadge({ id, navigationType }: TodosCountBadgeProps): JSX.Element {
    const isCategory = navigationFilterTypes.category === navigationType;
    const todoCount = useTodoStore(getTodoCount(id, isCategory));

    return <Badge count={todoCount} />;
}

export default TodosCountBadge;
