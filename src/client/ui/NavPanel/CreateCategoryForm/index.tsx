import React, { FormEventHandler, useEffect, useRef } from 'react';

import { MAX_CATEGOTY_LENGTH, MIN_CATEGOTY_LENGTH } from '../../../../common/domain/category/validation';

import './index.css';

type CreatecategoryForm = {
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

function CreateCategoryForm(props: CreatecategoryForm) {
    const formRef = useRef<HTMLFormElement>(null);
    const catrgoryRef = useRef<HTMLInputElement>(null);
    const { inProgress, isResetForm, isOpen, onCreateCategory } = props;

    useEffect(() => {
        if (isOpen && catrgoryRef.current) {
            catrgoryRef.current.focus();
        }
    }, [isOpen]);

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
                    ref={catrgoryRef}
                    className="create-category-form-input"
                    title="Название категории задач"
                    minLength={MIN_CATEGOTY_LENGTH}
                    maxLength={MAX_CATEGOTY_LENGTH}
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
