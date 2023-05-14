import React from 'react';

// components
import MenuIcon from '../Icons/MenuIcon';
import CloseIcon from '../Icons/CloseIcon';
import CheckButton from '../CheckButton';

import './index.css';
import icon from '../../../../assets/todolist_.svg';

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
                    <CheckButton
                        checked={isOpen}
                        unCheckedIcon={<MenuIcon />}
                        checkedIcon={<CloseIcon />}
                        onClick={toggleNavPane}
                        className="app-header-menu-button"
                        title={`${isOpen ? 'Скрыть' : 'Показать'} панель навигации`}
                    />
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
