import { renderHook } from '@testing-library/react';

import { resetStore } from './utils/store.setup.ts';

import { getCategoryList } from '../getCategoryList.ts';
import { useTodoStore } from '../../../domain/store/store.tsx';

beforeAll(() => {
    resetStore();
});

describe('getCategoryList', () => {
    it('должен вернуть список id всех категорий в store', () => {
        const { result } = renderHook(() => {
            return getCategoryList();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().categories.ids);
    });
});
