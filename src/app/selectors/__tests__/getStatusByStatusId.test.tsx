import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getStatusByStatusId } from '../getStatusByStatusId.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getStatusByStatusId>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

describe('getStatusByStatusId', () => {
    it('должен вернуть запись status по его id в store', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getStatusByStatusId(1);
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().statuses.byId[1]);
    });

    it('должен вернуть undefined если такой записи нет в store', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getStatusByStatusId(111);
                    }}
                />,
            );
        });

        expect(result).toBeUndefined();
    });
});
