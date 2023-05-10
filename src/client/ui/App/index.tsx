import React from 'react';

import './index.css';

type AppProps = { navigationPanel: JSX.Element; todos: JSX.Element };

function App(props: AppProps) {
    const { navigationPanel, todos } = props;

    return (
        <main className="app">
            <h1>Todo App</h1>
            {navigationPanel}
            {todos}
        </main>
    );
}

export default App;
