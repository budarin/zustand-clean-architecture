import { shallow } from 'zustand/shallow';
import React, { FormEventHandler } from 'react';

import CreateCategoryForm from '../../../../ui/NavPanel/CreateCategoryForm';
import { useTodoStore } from '../../../domain/store';

type CreatecategoryForm = {
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

const iconsSelector = (state: State) => Object.values(state.icons.byId);

function CreateCategoryFormContainer(props: CreatecategoryForm) {
    const icons = useTodoStore(iconsSelector, shallow);
    const { inProgress, isResetForm, isOpen, onCreateCategory } = props;

    return (
        <CreateCategoryForm
            icons={icons}
            inProgress={inProgress}
            isResetForm={isResetForm}
            isOpen={isOpen}
            onCreateCategory={onCreateCategory}
        />
    );
}

export default CreateCategoryFormContainer;
