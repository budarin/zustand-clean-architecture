import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../../domain/navigationFilter/index.ts';

import { useTodoStore } from '../../../domain/store.tsx';
import { IconsByNameKey, iconsByName } from '../../iconsByName.ts';

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

        const { title: filterTitle, key, type: navType } = state.navigationFilter;

        switch (navType) {
            case navigationFilterTypes.category: {
                const category = state.categories.byId[key as Id];

                title = category.category;
                icon = state.icons.byId[category.icon_id].icon_name;
                count = state.todos.idsByCategoryId[category.category_id]?.length || 0;

                break;
            }

            case navigationFilterTypes.filter: {
                title = navigationFilters[key as NavigationFiltersKey];
                icon = navigationFilterIcons[key as NavigationFiltersKey];
                count = state.todos.idsByFilterId[key].length;

                break;
            }

            case navigationFilterTypes.calendar: {
                title = filterTitle;
                icon = 'today.png';
                count = 0;

                break;
            }

            default:
                break;
        }

        return {
            title,
            icon,
            count,
        };
    }, []);

    const { icon, title, count } = useTodoStore(selector, shallow);
    const iconName = iconsByName[icon as IconsByNameKey];

    return (
        <TodoList isOpen={isOpen} category={title} icon={iconName} count={count}>
            <TodoListContainer />
        </TodoList>
    );
}

export default TodoListViewContainer;
