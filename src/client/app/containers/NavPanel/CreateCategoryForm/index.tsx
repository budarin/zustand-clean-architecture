import React, { FormEventHandler, forwardRef } from 'react';

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

const CreateCategoryFormContainer = forwardRef(
    (props: CreatecategoryForm, ref: React.ForwardedRef<HTMLFormElement | null>) => {
        const { inProgress, isResetForm, isOpen, onCreateCategory } = props;

        const icons = useTodoStore(iconsSelector);

        return (
            <CreateCategoryForm
                ref={ref}
                icons={icons}
                inProgress={inProgress}
                isResetForm={isResetForm}
                isOpen={isOpen}
                onCreateCategory={onCreateCategory}
            />
        );
    },
);

export default CreateCategoryFormContainer;
