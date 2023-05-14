import React, { MouseEventHandler, ReactNode, memo } from 'react';

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
        <div className="category-header">
            <div className="category-header-container">
                <h2>Категории</h2>
                <CheckButton
                    checked={isOpen}
                    onClick={toggleOpen}
                    unCheckedIcon={<AddIcon className="category-header-button-icon" />}
                    checkedIcon={<CollapseIcon className="category-header-button-icon" />}
                    title={isOpen ? "Свернуть форму 'Добавить категорию'" : 'Добавить категорию'}
                />
            </div>

            <div style={{ display: isOpen ? 'flex' : 'none' }} className="category-header-form-container">
                {children}
            </div>
        </div>
    );
});

export default CategoryHeader;
