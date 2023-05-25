import React, { FormEventHandler, forwardRef, useEffect, useRef } from 'react';

import { IconsByNameKey, iconsByName } from '../../../app/containers/iconsByName';
import { MAX_CATEGOTY_LENGTH, MIN_CATEGOTY_LENGTH } from '../../../../common/domain/category/validation';

import './index.css';
import { useKeyDownToClickEventyDown } from '../../hooks/useKeyDownToClickEvent';
import { useArrowKeysToSimulateTab } from '../../hooks/useArrowKeysToSimulateTab';

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
    const iconsContainerRef = useRef<HTMLDivElement>(null);

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

    useArrowKeysToSimulateTab(iconsContainerRef);
    useKeyDownToClickEventyDown(iconsContainerRef, ['Enter', 'Space']);

    return (
        <form ref={ref} className="create-category-form" onSubmit={onCreateCategory}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                    className="create-category-form-input"
                    type="text"
                    name="category"
                    ref={catrgoryRef}
                    title="Название категории задач"
                    minLength={MIN_CATEGOTY_LENGTH}
                    maxLength={MAX_CATEGOTY_LENGTH}
                    disabled={disabled}
                />
                <div ref={iconsContainerRef} className="create-category-form-icons">
                    {icons.map((icon, idx) => {
                        const iconName = iconsByName[icon.icon_name as IconsByNameKey];

                        return (
                            <label key={icon.icon_id} className="create-category-form-icon-label" tabIndex={0}>
                                <input
                                    className="create-category-form-icon-cb"
                                    type="radio"
                                    name="icon_id"
                                    value={icon.icon_id}
                                    defaultChecked={idx === 0}
                                    disabled={disabled}
                                />
                                <img src={iconName} width={18} height={18} alt="" />
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

CreateCategoryForm.displayName = 'CreateCategoryForm';

export default CreateCategoryForm;
