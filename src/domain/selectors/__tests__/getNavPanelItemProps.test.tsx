import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react-hooks';
import { useTodoStore } from '../../store/store.tsx';
import { getNavPanelItemProps } from '../getNavPanelItemProps.ts';
import { serverInitialState } from '../../../infrastructure/server/serverInitialState.ts';

{
    const { icons, statuses, categories, todos } = serverInitialState;
    const { _addIcon, _addStatus, _addCategory, _addTodo } = useTodoStore.getState();

    icons?.forEach((icon) => {
        try {
            _addIcon(icon);
        } catch (error) {
            console.error(error);
        }
    });

    statuses?.forEach((status) => {
        try {
            _addStatus(status);
        } catch (error) {
            console.error(error);
        }
    });

    categories?.forEach((category) => {
        try {
            _addCategory(category);
        } catch (error) {
            console.error(error);
        }
    });

    todos?.forEach((todo) => {
        try {
            _addTodo(todo);
        } catch (error) {
            console.error(error);
        }
    });
}

type TestComponentProps = {
    hook: () => unknown;
};
const TestComponent: FC<TestComponentProps> = ({ hook }) => {
    hook();
    return null;
};

describe('getNavPanelItemProps', () => {
    it('должен вернуть свойства для указанного элемента панели навигации', () => {
        let selectedNavItemProps = {} as ReturnType<typeof getNavPanelItemProps>;

        act(() => {
            createRoot(document.createElement('div')).render(
                <TestComponent
                    hook={() => {
                        selectedNavItemProps = getNavPanelItemProps(1, 'category');
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
});
