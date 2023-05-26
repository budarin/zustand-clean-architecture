import MenuIcon from '../../Icons/MenuIcon';
import CheckButton from '../../CheckButton';
import CloseIcon from '../../Icons/CloseIcon';

import './index.css';

type AppHeader = {
    icon: string;
    isSmallScreen: boolean;
    isNavPanelOpen: boolean;
    toggleNavPane: () => void;
};

function AppHeader(props: AppHeader) {
    const { icon, isSmallScreen, isNavPanelOpen, toggleNavPane } = props;

    return (
        <div className="App-Header">
            <img className="AppHeader-Icon" src={icon} width={32} height={32} alt="App logo" />
            <h1 className="AppHeader-Title">Мои Задачи</h1>
            {isSmallScreen ? (
                <CheckButton
                    className="AppHeader-MenuButton"
                    checked={isNavPanelOpen}
                    unCheckedIcon={<MenuIcon />}
                    checkedIcon={<CloseIcon />}
                    onClick={toggleNavPane}
                    title={`${isNavPanelOpen ? 'Скрыть' : 'Показать'} панель навигации`}
                />
            ) : null}
        </div>
    );
}

export default AppHeader;
