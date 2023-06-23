import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { getIconCollection } from '../getIconCollection.ts';
import { serverInitialState } from '../../../server/utils/serverInitialState.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getIconCollection>;

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
