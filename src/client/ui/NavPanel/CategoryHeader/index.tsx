import React, { FormEventHandler, MouseEventHandler, memo } from 'react';

import './index.css';
import CreateCategoryForm from '../CreateCategoryForm';

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
                <button
                    key="collapse"
                    className="category-header-button"
                    title={isOpen ? "Свернуть форму 'Добавить категорию'" : 'Добавить категорию'}
                    onClick={handleIsOpen}
                >
                    {isOpen ? (
                        <svg className="category-header-button-icon" width="20" height="20" viewBox="0 0 24 24">
                            <path
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M 8 14 L 11.962 10.002"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M 12 10.002 L 15.962 14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg className="category-header-button-icon" width="20" height="20" viewBox="0 0 24 24">
                            <path
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8 12H16"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 16V8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            </div>

            <CreateCategoryForm
                inProgress={inProgress}
                isResetForm={isResetForm}
                isOpen={isOpen}
                onCreateCategory={onCreateCategory}
            />
        </div>
    );
});

export default CategoryHeader;
