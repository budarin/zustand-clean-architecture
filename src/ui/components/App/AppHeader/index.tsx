import React from 'react';
import MenuIcon from '../../Icons/MenuIcon/index.tsx';
import CloseIcon from '../../Icons/CloseIcon/index.tsx';
import CheckButton from '../../Buttons/CheckButton/index.tsx';

import icon from '../../../../../assets/todolist.svg';

import './index.css';

type AppHeaderProps = {
    isSmallScreen: boolean;
    isNavPanelVisible: boolean;
    onToggleNavPane: () => void;
};

const AppHeader: React.FC<AppHeaderProps> = (props) => {
    const { isSmallScreen, isNavPanelVisible, onToggleNavPane } = props;

    return (
        <div className="AppHeader">
            <img className="AppHeader-Logo" src={icon} width={32} height={32} alt="App logo" />

            <h1 className="AppHeader-Title">Мои Задачи</h1>

            {isSmallScreen ? (
                <CheckButton
                    className="AppHeader-MenuButton"
                    checked={isNavPanelVisible}
                    unCheckedIcon={<MenuIcon />}
                    checkedIcon={<CloseIcon />}
                    onClick={onToggleNavPane}
                    title={`${isNavPanelVisible ? 'Скрыть' : 'Показать'} панель навигации`}
                />
            ) : null}
        </div>
    );
};

export default AppHeader;
