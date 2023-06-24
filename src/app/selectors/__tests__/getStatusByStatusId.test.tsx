import { renderHook } from '@testing-library/react';

import { resetStore } from './utils/store.setup.ts';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getStatusByStatusId } from '../getStatusByStatusId.ts';

beforeAll(() => {
    resetStore();
});

describe('getStatusByStatusId', () => {
    it('должен вернуть запись status по его id в store', () => {
        const { result } = renderHook(() => {
            return getStatusByStatusId(1);
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual(useTodoStore.getState().statuses.byId[1]);
    });

    it('должен вернуть undefined если такой записи нет в store', () => {
        const { result } = renderHook(() => {
            return getStatusByStatusId(111);
        });

        expect(result.current).toBeUndefined();
    });
});
