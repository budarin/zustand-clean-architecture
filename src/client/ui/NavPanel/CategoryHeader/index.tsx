import React, { FormEventHandler, MouseEventHandler, memo } from 'react';

//components
import AddIcon from '../../Icons/AddIcon';
import CheckButton from '../../CheckButton';
import CollapseIcon from '../../Icons/CollapseIcon';
import CreateCategoryFormContainer from '../../../app/containers/NavPanel/CreateCategoryForm';

import './index.css';

type CategoryHeader = {
    isOpen: boolean;
    isResetForm: boolean;
    handleIsOpen: MouseEventHandler<HTMLButtonElement>;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

const CategoryHeader = memo((props: CategoryHeader): JSX.Element => {
    const { isOpen, isResetForm, handleIsOpen, inProgress, onCreateCategory } = props;

    return (
        <div className="category-header">
            <div className="category-header-container">
                <h2>Категории</h2>
                <CheckButton
                    checked={isOpen}
                    onClick={handleIsOpen}
                    unCheckedIcon={<AddIcon className="category-header-button-icon" />}
                    checkedIcon={<CollapseIcon className="category-header-button-icon" />}
                    title={isOpen ? "Свернуть форму 'Добавить категорию'" : 'Добавить категорию'}
                />
            </div>

            <div style={{ display: isOpen ? 'flex' : 'none' }} className="category-header-form-container">
                <CreateCategoryFormContainer
                    inProgress={inProgress}
                    isResetForm={isResetForm}
                    isOpen={isOpen}
                    onCreateCategory={onCreateCategory}
                />
            </div>
        </div>
    );
});

export default CategoryHeader;
