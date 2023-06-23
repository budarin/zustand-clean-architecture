import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { getNavigationFilter } from '../getNavigationFilter.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getNavigationFilter>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

const onHookCall = () => {
    result = getNavigationFilter();
};

describe('getNavigationFilter', () => {
    it('должен вернуть текущее состояние navigationFilter в store', () => {
        act(() => {
            root.render(<TestComponent hook={onHookCall} />);
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().navigationFilter);
    });
});
