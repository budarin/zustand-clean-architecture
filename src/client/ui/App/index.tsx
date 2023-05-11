import React from 'react';

import './index.css';
import icon from '../../../../assets/todolist.svg';

type AppProps = { navigationPanel: JSX.Element; todos: JSX.Element };

function App(props: AppProps) {
    const { navigationPanel, todos } = props;

    return (
        <main className="app">
            <div className="app-header">
                <img className="app-header-icon" src={icon} width={32} height={32} />
                <h1 className="app-header-title">Todo App</h1>
            </div>

            <div className="app-container">
                {navigationPanel}
                {todos}
            </div>
        </main>
    );
}

export default App;
