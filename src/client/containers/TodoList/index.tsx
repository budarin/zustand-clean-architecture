import React from 'react';

import { useTodoStore } from '../../store/index.tsx';
import { navigationFilterTypes } from '../../store/navigationFilter.ts';

// components
import TodoListItemContainer from '../TodoListItem/index.tsx';

// selectors
const getNavigationFilter = (state: State) => state.navigationFilter;

function TodoListContainer() {
    const { key, type } = useTodoStore(getNavigationFilter);
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
