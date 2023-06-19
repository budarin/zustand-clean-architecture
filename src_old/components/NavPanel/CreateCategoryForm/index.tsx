import React, { FormEventHandler, forwardRef, useEffect, useRef } from 'react';

import { useKeyDownToClickEvent } from '../../hooks/useKeyDownToClickEvent';
import { IconsByNameKey, iconsByName } from '../../../containers/iconsByName.ts';
import { useArrowKeysToSimulateTab } from '../../hooks/useArrowKeysToSimulateTab';

import { MAX_CATEGOTY_LENGTH, MIN_CATEGOTY_LENGTH } from '../../../../src/domain/entities/category/validate.ts';

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
    useKeyDownToClickEvent(iconsContainerRef, ['Enter', 'Space']);

    return (
        <form ref={ref} className="CreateCategoryForm" onSubmit={onCreateCategory}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                    className="CreateCategoryForm-Input"
                    type="text"
                    name="category"
                    ref={catrgoryRef}
                    title="Название категории задач"
                    minLength={MIN_CATEGOTY_LENGTH}
                    maxLength={MAX_CATEGOTY_LENGTH}
                    disabled={disabled}
                />
                <div ref={iconsContainerRef} className="CreateCategoryForm-Icons">
                    {icons.map((icon, idx) => {
                        const iconName = iconsByName[icon.icon_name as IconsByNameKey];

                        return (
                            <label key={icon.icon_id} className="CreateCategoryForm-IconLabel" tabIndex={0}>
                                <input
                                    className="CreateCategoryForm-IconCheckBox"
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
            <button type="submit" className="CreateCategoryForm-Button" disabled={disabled}>
                Создать
            </button>
        </form>
    );
});

CreateCategoryForm.displayName = 'CreateCategoryForm';

export default CreateCategoryForm;
