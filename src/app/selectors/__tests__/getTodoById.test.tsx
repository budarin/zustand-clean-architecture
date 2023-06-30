import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getTodoById } from '../getTodoById.ts';

beforeAll(() => {
    resetStoreForReact();
});

describe('getTodoById', () => {
    it('должен вернуть полное описание задачи по ее id в store', () => {
        const { result } = renderHook(() => {
            return getTodoById(1);
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().todos.byId[1]);
    });

    it('должен вернуть undefined для не существующей задачи в store', () => {
        const { result } = renderHook(() => {
            return getTodoById(1111);
        });

        expect(result.current).toBeUndefined();
    });
});
