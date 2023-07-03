import React from 'react';

import { getTodoListByNavigationFilter } from '../../../src/app/selectors/getTodoListByNavFilter.ts';

// components
import TodoListItemContainer from './ListItem/index.tsx';

function TodoListContainer() {
    const todoIds = getTodoListByNavigationFilter();

    return (
        <>
            {todoIds.map((id) => (
                <TodoListItemContainer key={id} id={id} />
            ))}
        </>
    );
}

export default TodoListContainer;
