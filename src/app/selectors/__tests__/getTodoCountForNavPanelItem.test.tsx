import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';

import { resetStore } from './utils/store.setup.ts';
import TestComponent from './utils/TestComponent.tsx';

import { useTodoStore } from '../../../domain/store/store.tsx';
import { inboxKey } from '../../../domain/store/navigationFilter/index.ts';
import { getTodoCountForNavPanelItem } from '../getTodoCountForNavPanelItem.ts';

const root = createRoot(document.createElement('div'));
let result = undefined as undefined | ReturnType<typeof getTodoCountForNavPanelItem>;

beforeAll(() => {
    resetStore();
    result = undefined;
});

describe('getTodoCountForNavPanelItem', () => {
    it('должен количество задач соответствующих категоии', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodoCountForNavPanelItem('category', 1);
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().todos.idsByCategoryId[1].length);
    });

    it('должен количество задач соответствующих фильтру', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodoCountForNavPanelItem('filter', inboxKey);
                    }}
                />,
            );
        });

        expect(result).not.toBeUndefined();
        expect(result).toEqual(useTodoStore.getState().todos.idsByFilterId[inboxKey].length);
    });

    it('должен вернуть undefined для не существующей категории', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodoCountForNavPanelItem('category', 111);
                    }}
                />,
            );
        });

        expect(result).toEqual(0);
    });

    it('должен вернуть undefined для не существующей фильтра', () => {
        act(() => {
            root.render(
                <TestComponent
                    hook={() => {
                        result = getTodoCountForNavPanelItem('filter', 'lalala');
                    }}
                />,
            );
        });

        expect(result).toEqual(0);
    });
});
