import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';
import { getTodoListByNavigationFilter } from '../getTodoListByNavFilter.ts';
import { inboxKey, navigationFilters } from '../../../domain/store/navigationFilter/index.ts';
import { setNavigationFilter } from '../../../domain/store/navigationFilter/setNavigationFilter.ts';
import { createFilterNavigationFilter } from '../../../domain/store/navigationFilter/createFilterNavigationFilter.ts';
import { createCategoryNavigationFilter } from '../../../domain/store/navigationFilter/createCategoryNavigationFilter.ts';
import { createCalendarNavigationFilter } from '../../../domain/store/navigationFilter/createCalendarNavigationFilter.ts';

beforeAll(() => {
    resetStoreForReact();
});

describe('getTodoListByNavFilter', () => {
    it('должен вернуть список задач для категории', () => {
        const { result } = renderHook(() => {
            const { category_id, category } = useTodoStore.getState().categories.byId[1];

            setNavigationFilter(createCategoryNavigationFilter(category_id, category));
            return getTodoListByNavigationFilter();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().todos.idsByCategoryId[1]);
    });

    it('должен вернуть список задач для фильтра', () => {
        const { result } = renderHook(() => {
            setNavigationFilter(createFilterNavigationFilter(inboxKey, navigationFilters[inboxKey]));
            return getTodoListByNavigationFilter();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().todos.idsByFilterId[inboxKey]);
    });

    it('должен вернуть список задач для календаря на сегодня', () => {
        const { result } = renderHook(() => {
            setNavigationFilter(createCalendarNavigationFilter(getTodayDate()));
            return getTodoListByNavigationFilter();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().todos.idsByDueDate[getTodayDate().valueOf()]);
    });

    it('должен вернуть пустой список задач если в календаре нет для него задая', () => {
        const dt = new Date(2000, 1, 1);

        const { result } = renderHook(() => {
            setNavigationFilter(createCalendarNavigationFilter(dt));
            return getTodoListByNavigationFilter();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual([]);
    });
});
