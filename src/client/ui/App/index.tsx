import React from 'react';

import icon from '../../../../assets/todolist_.svg';

import './index.css';

type AppProps = {
    isSmallScreen: boolean;
    toggleNavPane: () => void;
    navigationPanel: JSX.Element;
    todos: JSX.Element;
};

function App(props: AppProps) {
    const { isSmallScreen, toggleNavPane, navigationPanel, todos } = props;

    return (
        <main className="app">
            <div className="app-header">
                <img className="app-header-icon" src={icon} width={32} height={32} />
                <h1 className="app-header-title">Мои Задачи</h1>
                {isSmallScreen ? <button onClick={toggleNavPane}>Выбрать</button> : null}
            </div>

            <div className="app-container">
                {navigationPanel}
                {todos}
            </div>
        </main>
    );
}

export default App;
