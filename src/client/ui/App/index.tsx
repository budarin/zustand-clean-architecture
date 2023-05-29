import { cn } from '../classNames.ts';

import './index.css';

import icon from '../../../../assets/todolist_.svg';

// components
import AppHeader from './AppHeader';

const appContainerCN = cn('App-Container');

type App = {
    isNavPanelOpen: boolean;
    isSmallScreen: boolean;
    toggleNavPane: () => void;
    navigationPanel: JSX.Element;
    todoListView: JSX.Element;
};

const onScroll = function onScroll(event: React.UIEvent<HTMLDivElement, UIEvent>) {
    const el = event.target as HTMLElement;
    el.className = appContainerCN({ scrolled: el.scrollTop > 0 });
};

function App(props: App) {
    const { isNavPanelOpen, isSmallScreen, toggleNavPane, navigationPanel, todoListView } = props;

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
