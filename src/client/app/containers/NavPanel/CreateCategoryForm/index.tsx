import { useOnClickOutside } from 'usehooks-ts';
import React, { FormEventHandler, useRef } from 'react';

import { useTodoStore } from '../../../domain/store';

// components
import CreateCategoryForm from '../../../../ui/NavPanel/CreateCategoryForm';

type CreatecategoryForm = {
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    toggleOpen: () => void;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

const iconsSelector = (state: State) => Object.values(state.icons.byId);

function CreateCategoryFormContainer(props: CreatecategoryForm) {
    const formRef = useRef<HTMLFormElement | null>(null);
    const icons = useTodoStore(iconsSelector);
    const { toggleOpen, inProgress, isResetForm, isOpen, onCreateCategory } = props;

    useOnClickOutside(formRef, () => {
        setTimeout(() => {
            isOpen && toggleOpen();
        }, 200);
    });

    return (
        <CreateCategoryForm
            ref={formRef}
            icons={icons}
            inProgress={inProgress}
            isResetForm={isResetForm}
            isOpen={isOpen}
            onCreateCategory={onCreateCategory}
        />
    );
}

export default CreateCategoryFormContainer;
