import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { getCategoryList } from '../getCategoryList.ts';
import { useTodoStore } from '../../../domain/store/store.tsx';

beforeAll(() => {
    resetStoreForReact();
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
