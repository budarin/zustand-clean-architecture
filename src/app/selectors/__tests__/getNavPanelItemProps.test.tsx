import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';
import { resetStore } from './utils/store.setup.ts';
import { getNavigationPanelItemProps } from '../getNavigationPanelItemProps.ts';

import TestComponent from './utils/TestComponent.tsx';

beforeAll(resetStore);

describe('getNavigationPanelItemProps', () => {
    it('должен вернуть свойства для элемента панели навигации из списка фильтров', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavigationPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavigationPanelItemProps('filter', 'inbox');
                    }}
                />,
            );
        });

        expect(selectedNavItemProps).not.toBeUndefined();

        expect(selectedNavItemProps).toEqual({
            title: 'Черновики',
            isCategory: false,
            selected: false,
            icon: 'inbox.png',
        });
    });

    it('должен вернуть свойства для элемента панели навигации из списка категорий', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavigationPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavigationPanelItemProps('category', 1);
                    }}
                />,
            );
        });

        expect(selectedNavItemProps).not.toBeUndefined();

        expect(selectedNavItemProps).toEqual({
            title: 'Дом',
            isCategory: true,
            selected: false,
            icon: 'home.png',
        });
    });

    it('должен вернуть undefined для не существующей категорий', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavigationPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavigationPanelItemProps('category', 100);
                    }}
                />,
            );
        });

        expect(selectedNavItemProps).toBeUndefined();
    });

    it('должен вернуть undefined для не существующего фильтра', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavigationPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavigationPanelItemProps('filter', 'lalalala');
                    }}
                />,
            );
        });

        expect(selectedNavItemProps).toBeUndefined();
    });
});
