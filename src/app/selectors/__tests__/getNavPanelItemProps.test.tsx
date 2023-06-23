import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';
import { getNavigationPanelItemProps } from '../getNavigationPanelItemProps.ts';

type GetNavigationPanelItemProps = ReturnType<typeof getNavigationPanelItemProps>;

const root = createRoot(document.createElement('div'));
let result: GetNavigationPanelItemProps | undefined = undefined;

beforeAll(() => {
    resetStore();
    result = undefined;
});

describe('getNavigationPanelItemProps', () => {
    it('должен вернуть свойства для элемента панели навигации из списка фильтров', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getNavigationPanelItemProps('filter', 'inbox');
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual({
            title: 'Черновики',
            isCategory: false,
            selected: false,
            icon: 'inbox.png',
        });
    });

    it('должен вернуть свойства для элемента панели навигации из списка категорий', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getNavigationPanelItemProps('category', 1);
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual({
            title: 'Дом',
            isCategory: true,
            selected: false,
            icon: 'home.png',
        });
    });

    it('должен вернуть undefined для не существующей категорий', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getNavigationPanelItemProps('category', 100);
                    }}
                />,
            );
        });

        expect(result).toBeUndefined();
    });

    it('должен вернуть undefined для не существующего фильтра', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getNavigationPanelItemProps('filter', 'lalalala');
                    }}
                />,
            );
        });

        expect(result).toBeUndefined();
    });
});
