import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getNavigationFilter } from '../getNavigationFilter.ts';

beforeAll(() => {
    resetStoreForReact();
});

describe('getNavigationFilter', () => {
    it('должен вернуть текущее состояние navigationFilter в store', () => {
        const { result } = renderHook(() => {
            return getNavigationFilter();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().navigationFilter);
    });
});
