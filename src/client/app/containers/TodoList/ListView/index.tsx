import React, { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../../../domain/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../../domain/navigationFilter/index.ts';

// components
import TodoListContainer from '../index.tsx';
import TodoList from '../../../../ui/TodoList/index.tsx';

type TodoListViewContainer = {
    isOpen: boolean;
};

function TodoListViewContainer(props: TodoListViewContainer): JSX.Element {
    const { isOpen } = props;

    const selector = useCallback((state: State) => {
        let title = '';
        let icon = '';
        let count = 0;

        const { key, type: navType } = state.navigationFilter;
        const isCategory = navigationFilterTypes.category === navType;

        if (isCategory) {
            const category = state.categories.byId[key as Id];

            title = category.category;
            icon = state.icons.byId[category.icon_id].icon_name;
            count = state.todos.idsByCategoryId[category.category_id]?.length || 0;
        } else {
            title = navigationFilters[key as NavigationFiltersKey];
            icon = navigationFilterIcons[key as NavigationFiltersKey];
            count = state.todos.idsByFilterId[key].length;
        }

        return {
            title,
            icon,
            count,
        };
    }, []);

    const { icon, title, count } = useTodoStore(selector, shallow);

    return (
        <TodoList isOpen={isOpen} category={title} icon={icon} count={count}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
