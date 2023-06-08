import MenuIcon from '../../Icons/MenuIcon/index.tsx';
import CloseIcon from '../../Icons/CloseIcon/index.tsx';
import CheckButton from '../../Buttons/CheckButton/index.tsx';

import icon from '../../../../../assets/todolist.svg';

import './index.css';

type AppHeader = {
    isSmallScreen: boolean;
    isNavPanelVisible: boolean;
    toggleNavPane: () => void;
};

function AppHeader(props: AppHeader) {
    const { isSmallScreen, isNavPanelVisible, toggleNavPane } = props;

    return (
        <div className="AppHeader">
            <img className="AppHeader__Icon" src={icon} width={32} height={32} alt="App logo" />

            <h1 className="AppHeader__Title">Мои Задачи</h1>

            {isSmallScreen ? (
                <CheckButton
                    className="AppHeader__MenuButton"
                    checked={isNavPanelVisible}
                    unCheckedIcon={<MenuIcon />}
                    checkedIcon={<CloseIcon />}
                    onClick={toggleNavPane}
                    title={`${isNavPanelVisible ? 'Скрыть' : 'Показать'} панель навигации`}
                />
            ) : null}
        </div>
    );
}

export default AppHeader;
