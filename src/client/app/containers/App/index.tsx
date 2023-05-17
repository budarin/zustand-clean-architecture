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

type AppContainer = {
    waitForLoadingAnimation: boolean;
};

function AppContainer(props: AppContainer) {
    const { waitForLoadingAnimation } = props;
    const { key } = useTodoStore.use.navigationFilter();
    const matches = useMediaQuery('(max-width: 640px)');
    const [isNavPaneOpen, setNavPaneOpen] = useState(showNavePaneAtStart);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let mounted = true;

        if (mounted) {
            if (matches) {
                isNavPaneOpen && setNavPaneOpen(false);
            } else {
                setNavPaneOpen(true);
            }

            const loading = document.querySelector('#loading') as HTMLElement;

            if (waitForLoadingAnimation) {
                loading.classList.add('hidden');
            } else {
                loading.style.position = 'relative';
            }

            timer = setTimeout(() => {
                loading.remove();
            }, 1500);

            const root = document.querySelector('#root') as HTMLElement;
            root.classList.remove('hidden');
        }

        return () => {
            mounted = false;
            timer && clearTimeout(timer);
        };
    }, [key, matches, waitForLoadingAnimation]);

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
