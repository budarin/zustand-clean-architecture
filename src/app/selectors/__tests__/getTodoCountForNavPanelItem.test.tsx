import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { inboxKey } from '../../../domain/store/navigationFilter/index.ts';
import { getTodoCountForNavPanelItem } from '../getTodoCountForNavPanelItem.ts';

beforeAll(() => {
    resetStoreForReact();
});

describe('getTodoCountForNavPanelItem', () => {
    it('должен количество задач соответствующих категоии', () => {
        const { result } = renderHook(() => {
            return getTodoCountForNavPanelItem('category', 1);
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().todos.idsByCategoryId[1].length);
    });

    it('должен количество задач соответствующих фильтру', () => {
        const { result } = renderHook(() => {
            return getTodoCountForNavPanelItem('filter', inboxKey);
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().todos.idsByFilterId[inboxKey].length);
    });

    it('должен вернуть undefined для не существующей фильтра', () => {
        const { result } = renderHook(() => {
            return getTodoCountForNavPanelItem('filter', 'lalala');
        });

        expect(result.current).toEqual(0);
    });
});
