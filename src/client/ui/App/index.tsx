import './index.css';

import icon from '../../../../assets/todolist_.svg';

// components
import AppHeader from './AppHeader';

type App = {
    isNavPanelOpen: boolean;
    isSmallScreen: boolean;
    toggleNavPane: () => void;
    navigationPanel: JSX.Element;
    todos: JSX.Element;
};

function App(props: App) {
    const { isNavPanelOpen, isSmallScreen, toggleNavPane, navigationPanel, todos } = props;

    return (
        <main className="App">
            <AppHeader
                icon={icon}
                isNavPanelOpen={isNavPanelOpen}
                isSmallScreen={isSmallScreen}
                toggleNavPane={toggleNavPane}
            />

            <div className="App-Container">
                {navigationPanel}
                {todos}
            </div>
        </main>
    );
}

export default App;
