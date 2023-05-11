import React, { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../../../domain/store.tsx';

// components
import TodoListContainer from '../index.tsx';
import TodoList from '../../../../ui/TodoList/index.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../../../../common/domain/navigationFilter/index.ts';

const selector = () =>
    useCallback((state: State) => {
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

function TodoListViewContainer(): JSX.Element {
    const { icon, title, count } = useTodoStore(selector(), shallow);

    return (
        <TodoList category={title} icon={icon} count={count}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
