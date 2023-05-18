import { useMediaQuery } from 'usehooks-ts';
import { useCallback, useEffect, useState } from 'react';

import { useTodoStore } from '../../domain/store.tsx';

// components
import App from '../../../ui/App/index.tsx';
import NavigationPanelContainer from '../NavPanel/index.tsx';
import TodoListViewContainer from '../TodoList/ListView/index.tsx';

import '../../../../../assets/site_icons/android-chrome-192x192.png';
import '../../../../../assets/site_icons/android-chrome-512x512.png';
import '../../../../../assets/site_icons/apple-touch-icon.png';
import '../../../../../assets/site_icons/favicon-16x16.png';
import '../../../../../assets/site_icons/favicon-32x32.png';
import '../../../../../assets/site_icons/mstile-144x144.png';
import '../../../../../assets/site_icons/mstile-150x150.png';
import '../../../../../assets/site_icons/mstile-310x150.png';
import '../../../../../assets/site_icons/mstile-310x310.png';
import '../../../../../assets/site_icons/mstile-70x70.png';
import '../../../../../assets/site_icons/safari-pinned-tab.svg';

import '../../../../../assets/site_icons/favicon.ico';
import '../../../../../assets/site_icons/site.webmanifest';
import '../../../../../assets/site_icons/browserconfig.xml';

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

    const matches = useMediaQuery('(max-width: 640px)');
    const { key } = useTodoStore.use.navigationFilter();
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

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let mounted = true;

        if (mounted) {
            const loading = document.querySelector('#loading') as HTMLElement;

            if (waitForLoadingAnimation) {
                loading && loading.classList.add('hidden');
            } else {
                loading && (loading.style.position = 'relative');
            }

            timer = setTimeout(() => {
                loading && loading.remove();
            }, 1500);

            const root = document.querySelector('#root') as HTMLElement;
            root && root.classList.remove('hidden');
        }

        return () => {
            mounted = false;
            timer && clearTimeout(timer);
        };
    }, []);

    const toggleNavPane = () => setNavPaneOpen((s) => !s);
    const onToggleNavPan = useCallback(toggleNavPane, []);

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
