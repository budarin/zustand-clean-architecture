import { renderHook } from '@testing-library/react';

import { resetStoreForReact } from '../../../utils/jest/store.setup.ts';
import { getNavigationPanelItemProps } from '../getNavigationPanelItemProps.ts';

beforeAll(() => {
    resetStoreForReact();
});

describe('getNavigationPanelItemProps', () => {
    it('должен вернуть свойства для элемента панели навигации из списка фильтров', () => {
        const { result } = renderHook(() => {
            return getNavigationPanelItemProps('filter', 'inbox');
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual({
            title: 'Черновики',
            isCategory: false,
            selected: false,
            icon: 'inbox.png',
        });
    });

    it('должен вернуть свойства для элемента панели навигации из списка категорий', () => {
        const { result } = renderHook(() => {
            return getNavigationPanelItemProps('category', 1);
        });

        expect(result.current).not.toBeUndefined();
        expect(result.current).toEqual({
            title: 'Дом',
            isCategory: true,
            selected: false,
            icon: 'home.png',
        });
    });

    it('должен вернуть undefined для не существующей категорий', () => {
        const { result } = renderHook(() => {
            return getNavigationPanelItemProps('category', 100);
        });

        expect(result.current).toBeUndefined();
    });

    it('должен вернуть undefined для не существующего фильтра', () => {
        const { result } = renderHook(() => {
            return getNavigationPanelItemProps('filter', 'lalalala');
        });

        expect(result.current).toBeUndefined();
    });
});
