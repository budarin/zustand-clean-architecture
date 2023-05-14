import React, { FormEventHandler } from 'react';

import { useTodoStore } from '../../../domain/store';

// components
import CreateCategoryForm from '../../../../ui/NavPanel/CreateCategoryForm';

type CreatecategoryForm = {
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

const iconsSelector = (state: State) => Object.values(state.icons.byId);

function CreateCategoryFormContainer(props: CreatecategoryForm) {
    const icons = useTodoStore(iconsSelector);
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
