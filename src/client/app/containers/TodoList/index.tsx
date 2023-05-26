import React from 'react';

import { useTodoStore } from '../../domain/store.tsx';
import { navigationFilterTypes } from '../../domain/navigationFilter/index.ts';

// components
import TodoListItemContainer from './ListItem/index.tsx';

const selector = (state: TodosState) => {
    const key = state.navigationFilter.key;

    switch (state.navigationFilter.type) {
        case navigationFilterTypes.calendar:
            return state.todos.idsByDueDate[key];
        case navigationFilterTypes.category:
            return state.todos.idsByCategoryId[key as Id];
        case navigationFilterTypes.filter:
            return state.todos.idsByFilterId[key];
        default:
            return [];
    }
};

const emptyList = [] as Id[];

function TodoListContainer() {
    const todoIds: Id[] = useTodoStore(selector) || emptyList;

    return (
        <>
            {todoIds.map((id) => (
                <TodoListItemContainer key={id} id={id} />
            ))}
        </>
    );
}

export default TodoListContainer;
