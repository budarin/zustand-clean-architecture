import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';

import { getIconCollection } from '../getIconCollection.ts';
import { serverInitialState } from '../../../server/utils/serverInitialState.ts';

beforeAll(() => {
    resetStoreForReact();
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
