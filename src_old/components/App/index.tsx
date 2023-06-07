import { cn } from '../classNames.ts';

import icon from '../../../assets/todolist.svg';

// components
import AppHeader from './AppHeader/index.tsx';

import './index.css';

const appContainerCN = cn('App-Container');

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

function App(props: App) {
    const { isNavPanelOpen, isSmallScreen, navigationPanel, todoListView, toggleNavPane } = props;

    return (
        <main className="App">
            <AppHeader
                icon={icon}
                isNavPanelOpen={isNavPanelOpen}
                isSmallScreen={isSmallScreen}
                toggleNavPane={toggleNavPane}
            />

            <div className="App-Container" onScroll={onScroll}>
                {navigationPanel}
                {todoListView}
            </div>
        </main>
    );
}

export default App;
