import React, { FormEventHandler, useEffect, useRef } from 'react';

import './index.css';

type CreatecategoryForm = {
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

function CreateCategoryForm({ inProgress, isResetForm, isOpen, onCreateCategory }: CreatecategoryForm) {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (isResetForm) {
            formRef.current?.reset();
        }
    }, [isResetForm]);

    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            <form className="create-category-form" ref={formRef} onSubmit={onCreateCategory}>
                <input
                    type="text"
                    maxLength={15}
                    className="create-category-form-input"
                    disabled={Boolean(inProgress)}
                />
                <button type="submit" className="create-category-form-button" disabled={Boolean(inProgress)}>
                    Добавить
                </button>
            </form>
        </div>
    );
}

export default CreateCategoryForm;
