import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getTodoById } from '../getTodoById.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getTodoById>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

describe('getTodoById', () => {
    it('должен вернуть полное описание задачи по ее id в store', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodoById(1);
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().todos.byId[1]);
    });

    it('должен вернуть undefined для не существующей задачи в store', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodoById(1111);
                    }}
                />,
            );
        });

        expect(result).toBeUndefined();
    });
});
