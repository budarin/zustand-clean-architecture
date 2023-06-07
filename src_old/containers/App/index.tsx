import { useMediaQuery } from 'usehooks-ts';
import { useCallback, useEffect, useState } from 'react';

import { getNavigationFilter } from '../../../src/domain/selectors/getNavigationFilter.ts';

// components
import App from '../../components/App/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

let showNavePaneAtStart = true;

if (window) {
    showNavePaneAtStart = window.innerWidth > 640;
}

function AppContainer() {
    const { key } = getNavigationFilter();
    const matches = useMediaQuery('(max-width: 640px)');
    const [isNavPanelOpen, setNavPaneOpen] = useState(showNavePaneAtStart);

    // в мобильном view при переключении navFilter
    // переключаемся на TodoView
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
            document.querySelector('#loading')?.remove();
            const root = document.querySelector('#root')?.classList.remove('hidden');
            document.getElementById('initialScript')?.remove();
        }

        return () => {
            mounted = false;
        };
    }, []);

    const toggleNavPane = () => setNavPaneOpen((s) => !s);
    const onToggleNavPan = useCallback(toggleNavPane, []);

    return (
        <App
            isSmallScreen={matches}
            isNavPanelOpen={isNavPanelOpen}
            toggleNavPane={onToggleNavPan}
            navigationPanel={<NavigationPanelContainer isOpen={isNavPanelOpen} />}
            todoListView={<TodoListViewContainer isOpen={!(matches && isNavPanelOpen)} />}
        />
    );
}

export default AppContainer;
