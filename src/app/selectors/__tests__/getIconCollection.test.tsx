import { renderHook } from '@testing-library/react';

import { resetStore } from './utils/store.setup.ts';

import { getIconCollection } from '../getIconCollection.ts';
import { serverInitialState } from '../../../server/utils/serverInitialState.ts';

beforeAll(() => {
    resetStore();
});

describe('getIconCollection', () => {
    it('должен вернуть массив описаний иконок в store', () => {
        const { result } = renderHook(() => {
            return getIconCollection();
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(serverInitialState.icons);
    });
});
