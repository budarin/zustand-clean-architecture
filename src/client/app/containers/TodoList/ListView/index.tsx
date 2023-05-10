import React from 'react';

import { useTodoStore } from '../../../domain/store.tsx';

// components
import TodoListContainer from '../index.tsx';
import TodoList from '../../../../ui/TodoList/index.tsx';

function TodoListViewContainer(): JSX.Element {
    const { title } = useTodoStore.use.navigationFilter();

    return (
        <TodoList category={title}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
