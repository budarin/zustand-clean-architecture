import { useMediaQuery } from 'usehooks-ts';
import { FC, useCallback, useState } from 'react';

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
