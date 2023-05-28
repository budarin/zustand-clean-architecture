import { useMediaQuery } from 'usehooks-ts';
import { useCallback, useEffect, useState } from 'react';

// components
import App from '../../../ui/App/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';

import 'react-toastify/dist/ReactToastify.css';

let showNavePaneAtStart = true;

if (window) {
    showNavePaneAtStart = window.innerWidth > 640;
}

function AppContainer() {
    const matches = useMediaQuery('(max-width: 640px)');
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
    }, [matches]);

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
            isSmallScreen={matches}
            isNavPanelOpen={isNavPanelOpen}
            toggleNavPane={onToggleNavPan}
            navigationPanel={<NavigationPanelContainer isOpen={isNavPanelOpen} />}
            todoListView={<TodoListViewContainer isOpen={!(matches && isNavPanelOpen)} />}
        />
    );
}

export default AppContainer;
