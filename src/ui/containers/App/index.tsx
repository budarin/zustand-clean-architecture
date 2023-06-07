import { FC, useCallback, useState } from 'react';

import { useMediaQuery } from 'usehooks-ts';
import { useCleanUpHtml } from './useCleanUpHtml.tsx';

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

    useCleanUpHtml();

    return (
        <App
            isSmallScreen={matches}
            isNavPanelOpen={isNavPanelOpen}
            toggleNavPane={onToggleNavPan}
            navigationPanel={<div></div>}
            todoListView={<div></div>}
        />
    );
};

export default AppContainer;
