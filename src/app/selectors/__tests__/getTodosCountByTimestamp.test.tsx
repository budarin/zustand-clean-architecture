import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getTodayDate } from '../../../utils/dateTime/getTodayDate.ts';
import { getTodosCountByTimestamp } from '../getTodosCountByTimestamp.ts';
import { getOnlyDateTimestamp } from '../../../utils/dateTime/getOnlyDateTimestamp.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getTodosCountByTimestamp>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

describe('getTodosCountByTimestamp', () => {
    it('должен вернуть не нулевое число задач для даты для которой есть задачи', () => {
        const timestamp = getTodayDate().valueOf();
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodosCountByTimestamp(timestamp);
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();

        const state = useTodoStore.getState();
        expect(result).toEqual(state.todos.idsByDueDate[timestamp]?.length || 0);
    });

    it('должен вернуть 0 задач для даты для которой нет задач', () => {
        const timestamp = getOnlyDateTimestamp('2017/01/01');
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodosCountByTimestamp(timestamp);
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();

        const state = useTodoStore.getState();
        expect(result).toEqual(state.todos.idsByDueDate[timestamp]?.length || 0);
    });
});
