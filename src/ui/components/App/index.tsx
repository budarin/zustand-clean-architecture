import { FC } from 'react';
import { cn } from '../classNames.ts';

import AppHeader from './AppHeader/index.tsx';

import './index.css';

const appContainerCN = cn('App__Container');

type App = {
    isNavPanelOpen: boolean;
    isSmallScreen: boolean;
    todoListView: JSX.Element;
    navigationPanel: JSX.Element;
    toggleNavPane: () => void;
};

const onScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const el = event.target as HTMLElement;
    el.className = appContainerCN({ scrolled: el.scrollTop > 0 });
};

const App: FC<App> = (props) => {
    const { isNavPanelOpen, isSmallScreen, navigationPanel, todoListView, toggleNavPane } = props;

    return (
        <main className="App">
            <AppHeader isSmallScreen={isSmallScreen} isNavPanelOpen={isNavPanelOpen} toggleNavPane={toggleNavPane} />

            <div className="App__Container" onScroll={onScroll}>
                <div className="App__NavPanel">{navigationPanel}</div>
                <div className="App__TodoList">{todoListView}</div>
            </div>
        </main>
    );
};

export default App;
