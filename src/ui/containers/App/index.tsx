import { useMediaQuery } from 'usehooks-ts';
import React, { useCallback, useState } from 'react';

import './index.css';
import App from '../../components/App/index.tsx';

let showNavePaneAtStart = true;

if (window) {
    showNavePaneAtStart = window.innerWidth > 640;
}

const AppContainer: React.FC = () => {
    const matches = useMediaQuery('(max-width: 640px)');
    const [isNavPanelOpen, setNavPaneOpen] = useState(showNavePaneAtStart);

    const toggleNavPane = (): void => setNavPaneOpen((s) => !s);
    const onToggleNavPan = useCallback(toggleNavPane, []);

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
