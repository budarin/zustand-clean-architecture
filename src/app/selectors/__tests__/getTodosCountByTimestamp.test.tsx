import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';
import { getTodosCountByTimestamp } from '../getTodosCountByTimestamp.ts';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp.ts';

beforeAll(() => {
    resetStoreForReact();
});

describe('getTodosCountByTimestamp', () => {
    it('должен вернуть не нулевое число задач для даты для которой есть задачи', () => {
        const timestamp = getTodayDate().valueOf();
        const { result } = renderHook(() => {
            return getTodosCountByTimestamp(timestamp);
        });

        expect(result.current).not.toBeUndefined();

        const state = useTodoStore.getState();
        expect(result.current).toEqual(state.todos.idsByDueDate[timestamp]?.length || 0);
    });

    it('должен вернуть 0 задач для даты для которой нет задач', () => {
        const timestamp = getOnlyDateTimestamp('2017/01/01');
        const { result } = renderHook(() => {
            return getTodosCountByTimestamp(timestamp);
        });

        expect(result.current).not.toBeUndefined();

        const state = useTodoStore.getState();
        expect(result.current).toEqual(state.todos.idsByDueDate[timestamp]?.length || 0);
    });
});
