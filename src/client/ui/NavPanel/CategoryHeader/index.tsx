import { MouseEventHandler, ReactNode, memo } from 'react';

//components
import AddIcon from '../../Icons/AddIcon';
import CheckButton from '../../CheckButton';
import CollapseIcon from '../../Icons/CollapseIcon';

import './index.css';

type CategoryHeader = {
    children: ReactNode;
    isOpen: boolean;
    toggleOpen: MouseEventHandler<HTMLButtonElement>;
};

const CategoryHeader = memo((props: CategoryHeader): JSX.Element => {
    const { children, isOpen, toggleOpen } = props;

    return (
        <div className="CategoryHeader">
            <div className="CategoryHeader-Container">
                <h2>Категории</h2>
                <CheckButton
                    checked={isOpen}
                    onClick={toggleOpen}
                    unCheckedIcon={<AddIcon className="CategoryHeader-ButtonIcon" />}
                    checkedIcon={<CollapseIcon className="CategoryHeader-ButtonIcon" />}
                    title={isOpen ? "Свернуть форму 'Добавить категорию'" : 'Добавить категорию'}
                />
            </div>

            <div className="CategoryHeader-FormContainer" style={{ display: isOpen ? 'flex' : 'none' }}>
                {children}
            </div>
        </div>
    );
});

CategoryHeader.displayName = 'CategoryHeader';

export default CategoryHeader;
