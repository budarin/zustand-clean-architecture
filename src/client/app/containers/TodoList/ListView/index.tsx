import React from 'react';

import { useTodoStore } from '../../../domain/store.tsx';

// components
import TodoListContainer from '../List/index.tsx';
import TodoList from '../../../../ui/TodoList/TodoList/index.tsx';

function TodoListViewContainer(): JSX.Element {
    const { title } = useTodoStore.use.navigationFilter();

    return (
        <TodoList category={title}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
