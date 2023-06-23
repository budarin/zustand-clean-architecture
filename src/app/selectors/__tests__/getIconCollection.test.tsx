import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { getIconCollection } from '../getIconCollection.ts';
import { serverInitialState } from '../../../server/utils/serverInitialState.ts';

type GetCategoryList = ReturnType<typeof getIconCollection>;

const root = createRoot(document.createElement('div'));
let result: GetCategoryList | undefined = undefined;

beforeAll(() => {
    resetStore();
    result = undefined;
});

const onHookCall = () => {
    result = getIconCollection();
};

describe('getIconCollection', () => {
    it('должен вернуть массив описаний иконок в store', () => {
        act(() => {
            root.render(<TestComponent hook={onHookCall} />);
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(serverInitialState.icons);
    });
});
