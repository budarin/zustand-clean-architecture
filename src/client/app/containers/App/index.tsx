import { useMediaQuery } from 'usehooks-ts';
import React, { useCallback, useEffect, useState } from 'react';

import { useTodoStore } from '../../domain/store.tsx';

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
    const { key } = useTodoStore.use.navigationFilter();
    const matches = useMediaQuery('(max-width: 640px)');
    const [isNavPaneOpen, setNavPaneOpen] = useState(showNavePaneAtStart);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            if (matches) {
                isNavPaneOpen && setNavPaneOpen(false);
            } else {
                setNavPaneOpen(true);
            }
        }

        return () => {
            mounted = false;
        };
    }, [key, matches]);

    const onToggleNavPan = useCallback(() => setNavPaneOpen((s) => !s), []);

    return (
        <App
            isOpen={isNavPaneOpen}
            isSmallScreen={matches}
            toggleNavPane={onToggleNavPan}
            navigationPanel={<NavigationPanelContainer isOpen={isNavPaneOpen} />}
            todos={<TodoListViewContainer isOpen={!(matches && isNavPaneOpen)} />}
        />
    );
}

export default AppContainer;
