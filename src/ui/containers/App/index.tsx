import { FC, useCallback, useEffect, useState } from 'react';

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

    useEffect(cleanUpHtml, []);

    return (
        <App
            isSmallScreen={matches}
            isNavPanelVisible={isNavPanelOpen}
            onToggleNavPane={onToggleNavPan}
            navigationPanel={<div>Nav</div>}
            todoListView={<div>TodoList</div>}
        />
    );
};

export default AppContainer;
