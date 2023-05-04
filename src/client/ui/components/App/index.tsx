import React from 'react';

import './index.css';

type AppProps = { navigationPanel: JSX.Element; todos: JSX.Element };

function App({ navigationPanel, todos }: AppProps) {
    return (
        <main className="app">
            <h3>Todo App</h3>
            {navigationPanel}
            {todos}
        </main>
    );
}

export default App;
