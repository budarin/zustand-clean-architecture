import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getTodoListViewProps } from '../getTodoListViewProps.ts';
import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';
import { setNavigationFilter } from '../../../domain/store/navigationFilter/setNavigationFilter.ts';
import { inboxKey, navigationFilterIcons, navigationFilters } from '../../../domain/store/navigationFilter/index.ts';
import { createFilterNavigationFilter } from '../../../domain/store/navigationFilter/createFilterNavigationFilter.ts';
import { createCategoryNavigationFilter } from '../../../domain/store/navigationFilter/createCategoryNavigationFilter.ts';
import { createCalendarNavigationFilter } from '../../../domain/store/navigationFilter/createCalendarNavigationFilter.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getTodoListViewProps>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

describe('getTodoListViewProps', () => {
    it('должен вернуть параметры для TodoListView для активного фильтра', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        setNavigationFilter(createFilterNavigationFilter(inboxKey, navigationFilters[inboxKey]));
                        result = getTodoListViewProps();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();

        const state = useTodoStore.getState();
        const title = navigationFilters[inboxKey];
        const icon = navigationFilterIcons[inboxKey];
        const count = state.todos.idsByFilterId[inboxKey].length || 0;

        expect(result).toEqual({ count, icon, title });
    });

    it('должен вернуть параметры для TodoListView для активной категории', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        const { category_id, category } = useTodoStore.getState().categories.byId[1];

                        setNavigationFilter(createCategoryNavigationFilter(category_id, category));
                        result = getTodoListViewProps();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();

        const state = useTodoStore.getState();
        const category = state.categories.byId[1];
        const title = category?.category || 'Не известная категория';
        const icon = state.icons.byId[category.icon_id].icon_name;
        const count = state.todos.idsByCategoryId[category.category_id]?.length || 0;

        expect(result).toEqual({ count, icon, title });
    });

    it('должен вернуть параметры для TodoListView для не существующей категории', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        setNavigationFilter(createCategoryNavigationFilter(111, 'lalala'));
                        result = getTodoListViewProps();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();

        const state = useTodoStore.getState();
        const category = state.categories.byId[1111];
        const title = category?.category || 'Не известная категория';
        const icon = state.icons.byId[category?.icon_id]?.icon_name || '';
        const count = state.todos.idsByCategoryId[category?.category_id]?.length || 0;

        expect(result).toEqual({ count, icon, title });
    });

    it('должен вернуть параметры для TodoListView на сегодня', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        setNavigationFilter(createCalendarNavigationFilter(getTodayDate()));
                        result = getTodoListViewProps();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();

        const state = useTodoStore.getState();
        const title = createCalendarNavigationFilter(getTodayDate()).title;
        const icon = 'today.png';
        const count = state.todos.idsByDueDate[getTodayDate().valueOf()]?.length || 0;

        expect(result).toEqual({ count, icon, title });
    });
});
