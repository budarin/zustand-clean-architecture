import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { getCategoryList } from '../getCategoryList.ts';

type GetCategoryList = ReturnType<typeof getCategoryList>;

const root = createRoot(document.createElement('div'));
let result: GetCategoryList | undefined = undefined;

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
        expect(result).toEqual([1, 2, 3, 4]);
    });
});
