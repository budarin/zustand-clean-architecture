import React from 'react';
import { cn } from '@bem-react/classname';

import AppHeader from './AppHeader/index.tsx';

import './index.css';

const appContainerCN = cn('App-Container');

type AppProps = {
    isNavPanelVisible: boolean;
    isSmallScreen: boolean;
    todoListView: JSX.Element;
    navigationPanel: JSX.Element;
    onToggleNavPane: () => void;
};

const onScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const el = event.target as HTMLElement;
    el.className = appContainerCN({ scrolled: el.scrollTop > 0 });
};

const App: React.FC<AppProps> = (props) => {
    const { isNavPanelVisible, isSmallScreen, navigationPanel, todoListView, onToggleNavPane } = props;

    return (
        <main className="App">
            <AppHeader
                isSmallScreen={isSmallScreen}
                isNavPanelVisible={isNavPanelVisible}
                onToggleNavPane={onToggleNavPane}
            />

            <div className="App-Container" onScroll={onScroll}>
                <div className="App-NavPanel">{navigationPanel}</div>
                <div className="App-TodoList">{todoListView}</div>
            </div>
        </main>
    );
};

export default App;
