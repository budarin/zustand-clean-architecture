import React from 'react';

import { useTodoStore } from '../../store/index.tsx';

// components
import TodoListContainer from '../TodoList/index.tsx';
import TodoList from '../../components/TodoList/index.tsx';

// selectors
const getNavigationFilter = (state: State) => state.navigationFilter;

function TodoListViewContainer(): JSX.Element {
    const { title } = useTodoStore(getNavigationFilter);

    return (
        <TodoList category={title}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
