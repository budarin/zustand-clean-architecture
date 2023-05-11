import React, { useCallback } from 'react';

import { useTodoStore } from '../../../domain/store.tsx';
import { navigationFilterTypes } from '../../../../../common/domain/navigationFilter/index.ts';

// components
import Badge from '../../../../ui/NavPanel/Badge/index.tsx';

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

function TodosCountBadgeContainer(props: TodosCountBadgeProps): JSX.Element {
    const { id, navigationType } = props;
    const isCategory = navigationFilterTypes.category === navigationType;
    const todoCount = useTodoStore(getTodoCount(id, isCategory));

    return <Badge count={todoCount} />;
}

export default TodosCountBadgeContainer;
