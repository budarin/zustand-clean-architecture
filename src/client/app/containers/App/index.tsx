import { useMediaQuery } from 'usehooks-ts';
import { useCallback, useEffect, useState } from 'react';

import { useTodoStore } from '../../domain/store.tsx';
import { useStartCheckingDueDateOfTodos } from '../../useCases/useStartCheckingDueDateOfTodos.ts';

// components
import App from '../../../ui/App/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

let showNavePaneAtStart = true;

if (window) {
    showNavePaneAtStart = window.innerWidth > 640;
}

type AppContainer = {
    waitForLoadingAnimation: boolean;
};

const navFilterSelector = (state: TodosState) => state.navigationFilter;

function AppContainer(props: AppContainer) {
    const { waitForLoadingAnimation } = props;

    useStartCheckingDueDateOfTodos();

    const matches = useMediaQuery('(max-width: 640px)');
    const { key } = useTodoStore(navFilterSelector);
    const [isNavPanelOpen, setNavPaneOpen] = useState(showNavePaneAtStart);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            if (matches) {
                isNavPanelOpen && setNavPaneOpen(false);
            } else {
                setNavPaneOpen(true);
            }
        }

        return () => {
            mounted = false;
        };
    }, [key, matches]);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            const loading = document.querySelector('#loading') as HTMLElement;

            loading && loading.remove();

            const root = document.querySelector('#root') as HTMLElement;
            root && root.classList.remove('hidden');
        }

        return () => {
            mounted = false;
        };
    }, []);

    const toggleNavPane = () => setNavPaneOpen((s) => !s);
    const onToggleNavPan = useCallback(toggleNavPane, []);

    return (
        <App
            isNavPanelOpen={isNavPanelOpen}
            isSmallScreen={matches}
            toggleNavPane={onToggleNavPan}
            navigationPanel={<NavigationPanelContainer isOpen={isNavPanelOpen} />}
            todos={<TodoListViewContainer isOpen={!(matches && isNavPanelOpen)} />}
        />
    );
}

export default AppContainer;
