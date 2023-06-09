import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';
import TestComponent from './utils/TestComponent.tsx';
import { getNavPanelItemProps } from '../getNavPanelItemProps.ts';

import './utils/store.setup.ts';

describe('getNavPanelItemProps', () => {
    it('должен вернуть свойства для указанного элемента панели навигации', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavPanelItemProps('inbox', 'filter');
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
});
