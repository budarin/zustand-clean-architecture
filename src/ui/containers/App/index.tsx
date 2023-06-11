import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { useMediaQuery } from 'usehooks-ts';
import { cleanUpHtml } from './cleanUpHtml.ts';

import App from '../../components/App/index.tsx';

import './index.css';

let showNavePaneAtStart = true;

if (window) {
    showNavePaneAtStart = window.innerWidth > 640;
}

const AppContainer: FC = () => {
    const matches = useMediaQuery('(max-width: 640px)');
    const [isNavPanelOpen, setNavPaneOpen] = useState(showNavePaneAtStart);

    const toggleNavPane = () => setNavPaneOpen((s) => !s);
    const onToggleNavPan = useCallback(toggleNavPane, []);

    const isMounted = useRef(false);
    useEffect(() => {
        let timer: NodeJS.Timeout;
        isMounted.current = true;

        if (isMounted.current) {
            cleanUpHtml();

            const pwaInstall = document.getElementsByTagName('pwa-install')[0];
            timer = setTimeout(() => {
                if (/iphone|ipad|ipod/.test(navigator.userAgent)) {
                    // @ts-ignore
                    pwaInstall.isAppleMobilePlatform = true;
                    // @ts-ignore
                    pwaInstall.hideDialog();
                    // @ts-ignore
                    pwaInstall.showDialog(true);
                    return;
                }

                // @ts-ignore
                if (pwaInstall.isInstallAvailable) {
                    // @ts-ignore
                    pwaInstall.showDialog();
                }
            }, 3000);
        }

        return () => {
            isMounted.current = false;
            clearTimeout(timer);
        };
    }, []);

    return (
        <App
            isSmallScreen={matches}
            isNavPanelVisible={isNavPanelOpen}
            toggleNavPane={onToggleNavPan}
            navigationPanel={<div>Nav</div>}
            todoListView={<div>TodoList</div>}
        />
    );
};

export default AppContainer;
