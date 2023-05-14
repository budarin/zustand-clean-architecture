import React from 'react';

import icon from '../../../../assets/todolist_.svg';

import './index.css';

type AppProps = {
    isOpen: boolean;
    isSmallScreen: boolean;
    toggleNavPane: () => void;
    navigationPanel: JSX.Element;
    todos: JSX.Element;
};

function App(props: AppProps) {
    const { isOpen, isSmallScreen, toggleNavPane, navigationPanel, todos } = props;

    return (
        <main className="app">
            <div className="app-header">
                <img className="app-header-icon" src={icon} width={32} height={32} />
                <h1 className="app-header-title">Мои Задачи</h1>
                {isSmallScreen ? (
                    <button
                        aria-expanded={isOpen}
                        onClick={toggleNavPane}
                        className="app-header-menu-button"
                        title={`${isOpen ? 'Скрыть' : 'Открыть'} панель навигации`}
                    >
                        {isOpen ? (
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                                    fill="#000000"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 17H20M4 12H20M4 7H20"
                                    stroke="#000000"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>
                ) : null}
            </div>

            <div className="app-container">
                {navigationPanel}
                {todos}
            </div>
        </main>
    );
}

export default App;
