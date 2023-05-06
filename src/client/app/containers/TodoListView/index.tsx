import React from 'react';

import { useTodoStore } from '../../domain/store.ts';

// components
import TodoListContainer from '../TodoList/index.tsx';
import TodoList from '../../../components/TodoList/index.tsx';

function TodoListViewContainer(): JSX.Element {
    const { title } = useTodoStore.use.navigationFilter();

    return (
        <TodoList category={title}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
