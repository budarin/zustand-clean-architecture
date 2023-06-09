import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';
import TestComponent from './utils/TestComponent.tsx';
import { getNavigationPanelItemProps } from '../getNavigationPanelItemProps.ts';

import './utils/store.setup.ts';

describe('getNavigationPanelItemProps', () => {
    it('должен вернуть свойства для элемента панели навигации из списка фильтров', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavigationPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavigationPanelItemProps('inbox', 'filter');
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
                        selectedNavItemProps = getNavigationPanelItemProps(1, 'category');
                    }}
                />,
            );
        });

        expect(selectedNavItemProps).not.toBeUndefined();

        expect(selectedNavItemProps).toEqual({
            title: 'Работа',
            isCategory: true,
            selected: false,
            icon: 'other.png',
        });
    });

    it('должен вернуть undefined для не существующей категорий', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavigationPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavigationPanelItemProps(100, 'category');
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
                        selectedNavItemProps = getNavigationPanelItemProps('lalalala', 'filter');
                    }}
                />,
            );
        });

        expect(selectedNavItemProps).toBeUndefined();
    });
});
