import { FC } from 'react';

import AppHeader from './AppHeader/index.tsx';

import './index.css';

type App = {
    isNavPanelOpen: boolean;
    isSmallScreen: boolean;
    toggleNavPane: () => void;
    navigationPanel: JSX.Element;
    todoListView: JSX.Element;
};

const App: FC<App> = (props) => {
    const { isNavPanelOpen, isSmallScreen, toggleNavPane, navigationPanel, todoListView } = props;

    return <AppHeader isSmallScreen={isSmallScreen} isNavPanelOpen={isNavPanelOpen} toggleNavPane={toggleNavPane} />;
};

export default App;
