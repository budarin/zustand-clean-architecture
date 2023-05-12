import React, { FormEventHandler, useEffect, useRef } from 'react';

import { MAX_CATEGOTY_LENGTH, MIN_CATEGOTY_LENGTH } from '../../../../common/domain/category/validation';

import './index.css';

type CreatecategoryForm = {
    icons: Icon[];
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

function CreateCategoryForm(props: CreatecategoryForm) {
    const formRef = useRef<HTMLFormElement>(null);
    const catrgoryRef = useRef<HTMLInputElement>(null);
    const { icons, inProgress, isResetForm, isOpen, onCreateCategory } = props;

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
        <form className="create-category-form" ref={formRef} onSubmit={onCreateCategory}>
            <div>
                <input
                    type="text"
                    name="category"
                    ref={catrgoryRef}
                    className="create-category-form-input"
                    title="Название категории задач"
                    minLength={MIN_CATEGOTY_LENGTH}
                    maxLength={MAX_CATEGOTY_LENGTH}
                    disabled={Boolean(inProgress)}
                />
                <div className="create-category-form-icons">
                    {icons.map((icon, idx) => (
                        <label key={icon.icon_id} className="create-category-form-icon-label">
                            <input
                                className="create-category-form-icon-cb"
                                type="radio"
                                name="icon_id"
                                value={icon.icon_id}
                                defaultChecked={idx === 0}
                            />
                            <img src={icon.icon_name} width={18} height={18} />
                        </label>
                    ))}
                </div>
            </div>
            <button type="submit" className="create-category-form-button" disabled={Boolean(inProgress)}>
                Создать
            </button>
        </form>
    );
}

export default CreateCategoryForm;
