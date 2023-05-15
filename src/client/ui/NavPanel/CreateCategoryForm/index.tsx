import React, { FormEventHandler, forwardRef, useEffect, useRef } from 'react';

import { IconsByNameKey, iconsByName } from '../../../app/containers/iconsByName';
import { MAX_CATEGOTY_LENGTH, MIN_CATEGOTY_LENGTH } from '../../../../common/domain/category/validation';

import './index.css';

type CreatecategoryForm = {
    icons: Icon[];
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

const CreateCategoryForm = forwardRef((props: CreatecategoryForm, ref: React.ForwardedRef<HTMLFormElement | null>) => {
    const { icons, inProgress, isResetForm, isOpen, onCreateCategory } = props;

    const disabled = Boolean(inProgress);
    const catrgoryRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            catrgoryRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (isResetForm && ref && 'current' in ref) {
            ref.current?.reset();
        }
    }, [isResetForm]);

    return (
        <form ref={ref} className="create-category-form" onSubmit={onCreateCategory}>
            <div>
                <input
                    type="text"
                    name="category"
                    ref={catrgoryRef}
                    className="create-category-form-input"
                    title="Название категории задач"
                    minLength={MIN_CATEGOTY_LENGTH}
                    maxLength={MAX_CATEGOTY_LENGTH}
                    disabled={disabled}
                />
                <div className="create-category-form-icons">
                    {icons.map((icon, idx) => {
                        const iconName = iconsByName[icon.icon_name as IconsByNameKey];

                        return (
                            <label key={icon.icon_id} className="create-category-form-icon-label">
                                <input
                                    className="create-category-form-icon-cb"
                                    type="radio"
                                    name="icon_id"
                                    value={icon.icon_id}
                                    defaultChecked={idx === 0}
                                    disabled={disabled}
                                />
                                <img src={iconName} width={18} height={18} />
                            </label>
                        );
                    })}
                </div>
            </div>
            <button type="submit" className="create-category-form-button" disabled={disabled}>
                Создать
            </button>
        </form>
    );
});

export default CreateCategoryForm;
