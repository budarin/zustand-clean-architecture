import './index.css';

import icon from '../../../../assets/todolist_.svg';

// components
import AppHeader from './AppHeader';

type App = {
    isOpen: boolean;
    isSmallScreen: boolean;
    toggleNavPane: () => void;
    navigationPanel: JSX.Element;
    todos: JSX.Element;
};

function App(props: App) {
    const { isOpen, isSmallScreen, toggleNavPane, navigationPanel, todos } = props;

    return (
        <main className="App">
            <AppHeader icon={icon} isOpen={isOpen} isSmallScreen={isSmallScreen} toggleNavPane={toggleNavPane} />

            <div className="App-Container">
                {navigationPanel}
                {todos}
            </div>
        </main>
    );
}

export default App;
