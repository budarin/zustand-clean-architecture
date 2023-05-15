import { useMediaQuery } from 'usehooks-ts';
import React, { useCallback, useEffect, useState } from 'react';

import { useTodoStore } from '../../domain/store.tsx';

// components
import App from '../../../ui/App/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';

import 'react-toastify/dist/ReactToastify.css';
import AnimatedAppIcon from '../../../ui/Icons/LoadingAppIcon/index.tsx';

function AppContainer() {
    const { key } = useTodoStore.use.navigationFilter();
    const [isNavPaneOpen, setNavPaneOpen] = useState(false);
    const [isSwInstalled, setSwInstalled] = useState(false);
    const matches = useMediaQuery('(max-width: 640px)');

    useEffect(() => {
        let mounted = true;

        navigator.serviceWorker.ready
            .then(() => {
                // Service Worker полностью установлен
                mounted && console.log('Service Worker установлен.');
                setSwInstalled(true);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            // если маленький экран - прячем навигацию
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
        <>
            {isSwInstalled ? (
                <App
                    isOpen={isNavPaneOpen}
                    isSmallScreen={matches}
                    toggleNavPane={onToggleNavPan}
                    navigationPanel={<NavigationPanelContainer isOpen={isNavPaneOpen} />}
                    todos={<TodoListViewContainer isOpen={!(matches && isNavPaneOpen)} />}
                />
            ) : (
                <AnimatedAppIcon />
            )}
        </>
    );
}

export default AppContainer;
