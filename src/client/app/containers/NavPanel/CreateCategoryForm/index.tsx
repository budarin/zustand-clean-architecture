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

let timer: NodeJS.Timeout;

function isNotify(el: HTMLElement): boolean {
    let parent = el.parentElement;

    while (parent) {
        if (parent.className === 'Toastify__toast-body') {
            return true;
        }

        parent = parent.parentElement;
    }

    return false;
}

function CreateCategoryFormContainer(props: CreatecategoryForm) {
    const { toggleOpen, inProgress, isResetForm, isOpen, onCreateCategory } = props;

    const icons = useTodoStore(iconsSelector);
    const formRef = useRef<HTMLFormElement | null>(null);

    const onClickOutside = (event: Event) => {
        if (isNotify(event.target as HTMLElement)) {
            return;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            if (isOpen) {
                toggleOpen();
                console.log(event);
            }
        }, 150);
    };

    useOnClickOutside(formRef, onClickOutside);

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
