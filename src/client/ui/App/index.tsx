import './index.css';

import icon from '../../../../assets/todolist_.svg';

// components
import AppHeader from './AppHeader';

type App = {
    isNavPanelOpen: boolean;
    isSmallScreen: boolean;
    toggleNavPane: () => void;
    navigationPanel: JSX.Element;
    todoListView: JSX.Element;
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

            <div className="App-Container">
                {navigationPanel}
                {todoListView}
            </div>
        </main>
    );
}

export default App;
