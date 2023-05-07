import React, { MouseEventHandler } from 'react';

import './index.css';

type CreatecategoryForm = {
    isOpen: Boolean;
    inProgress: Boolean;
    onCreateCategory: MouseEventHandler<HTMLButtonElement>;
};

function CreateCategoryForm({ inProgress, isOpen, onCreateCategory }: CreatecategoryForm) {
    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <form className="create-category-form">
                <input type="text" maxLength={15} className="create-category-form-input" />
                <button
                    type="button"
                    disabled={Boolean(inProgress)}
                    className="create-category-form-button"
                    onClick={onCreateCategory}
                >
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default CreateCategoryForm;
