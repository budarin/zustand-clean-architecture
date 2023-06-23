import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { getCategoryList } from '../getCategoryList.ts';
import { useTodoStore } from '../../../domain/store/store.tsx';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getCategoryList>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

const onHookCall = () => {
    result = getCategoryList();
};

describe('getCategoryList', () => {
    it('должен вернуть список id всех категорий в store', () => {
        act(() => {
            root.render(<TestComponent hook={onHookCall} />);
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().categories.ids);
    });
});
