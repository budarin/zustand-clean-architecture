import React, { MouseEvent, MouseEventHandler, memo, useCallback, useState } from 'react';

import './index.css';

type CategoryHeader = {
    onCreateCategory: MouseEventHandler<HTMLButtonElement>;
};

const CategoryHeader = memo(({ onCreateCategory }: CategoryHeader): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="category-header">
            <div className="category-header-container">
                <h4>Категории</h4>
                <button
                    key="collapse"
                    className="category-header-button"
                    title={isOpen ? "Свернуть форму 'Добавить категорию'" : 'Добавить категорию'}
                    onClick={() => setOpen((state) => !state)}
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

            <form className="category-header-form" style={{ display: isOpen ? 'block' : 'none' }}>
                <input type="text" maxLength={15} className="category-header-form-input" />
                <button type="button" className="category-header-form-button" onClick={onCreateCategory}>
                    Добавить
                </button>
            </form>
        </div>
    );
});

export default CategoryHeader;
