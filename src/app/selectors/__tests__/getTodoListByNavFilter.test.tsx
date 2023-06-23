import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';
import { getTodoListByNavigationFilter } from '../getTodoListByNavFilter.ts';
import { inboxKey, navigationFilters } from '../../../domain/store/navigationFilter/index.ts';
import { setNavigationFilter } from '../../../domain/store/navigationFilter/setNavigationFilter.ts';
import { createFilterNavigationFilter } from '../../../domain/store/navigationFilter/createFilterNavigationFilter.ts';
import { createCategoryNavigationFilter } from '../../../domain/store/navigationFilter/createCategoryNavigationFilter.ts';
import { createCalendarNavigationFilter } from '../../../domain/store/navigationFilter/createCalendarNavigationFilter.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getTodoListByNavigationFilter>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

describe('getTodoListByNavFilter', () => {
    it('должен вернуть список задач для категории', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        const { category_id, category } = useTodoStore.getState().categories.byId[1];

                        setNavigationFilter(createCategoryNavigationFilter(category_id, category));
                        result = getTodoListByNavigationFilter();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().todos.idsByCategoryId[1]);
    });

    it('должен вернуть пустой список задач для не существующей категории', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        setNavigationFilter(createCategoryNavigationFilter(111, 'lalala'));
                        result = getTodoListByNavigationFilter();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual([]);
    });

    it('должен вернуть список задач для фильтра', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        setNavigationFilter(createFilterNavigationFilter(inboxKey, navigationFilters[inboxKey]));
                        result = getTodoListByNavigationFilter();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().todos.idsByFilterId[inboxKey]);
    });

    it('должен вернуть список задач для календаря на сегодня', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        setNavigationFilter(createCalendarNavigationFilter(getTodayDate()));
                        result = getTodoListByNavigationFilter();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().todos.idsByDueDate[getTodayDate().valueOf()]);
    });

    it('должен вернуть пустой список задач если в календаре нет для него задая', () => {
        const dt = new Date(2000, 1, 1);

        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        setNavigationFilter(createCalendarNavigationFilter(dt));
                        result = getTodoListByNavigationFilter();
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual([]);
    });
});
