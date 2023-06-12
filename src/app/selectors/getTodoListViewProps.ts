import { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../../domain/store/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../domain/entities/navigationFilter/index.ts';

const getTodoListViewPropsSelector = () =>
    useCallback((state: TodosState) => {
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
                count = state.todos.idsByDueDate[key]?.length || 0;

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

export const getTodoListViewProps = () => useTodoStore(getTodoListViewPropsSelector(), shallow);
