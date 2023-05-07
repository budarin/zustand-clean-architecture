import React from 'react';

import { useTodoStore } from '../../../domain/store.tsx';
import { navigationFilterTypes } from '../../../domain/utils/navigationFilter.ts';

// components
import TodoListItemContainer from '../ListItem/index.tsx';

function TodoListContainer() {
    const { key, type } = useTodoStore.use.navigationFilter();
    const isCategoryNavigation = navigationFilterTypes.category === type;

    const todoIds =
        useTodoStore((state) => {
            return isCategoryNavigation ? state.todos.idsByCategoryId[key as Id] : state.todos.idsByFilterId[key];
        }) || [];

    return (
        <>
            {todoIds.map((id) => (
                <TodoListItemContainer key={id} id={id} />
            ))}
        </>
    );
}

export default TodoListContainer;
