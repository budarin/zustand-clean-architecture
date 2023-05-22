import { shallow } from 'zustand/shallow';
import React, { FormEventHandler, forwardRef, memo } from 'react';

import { useTodoStore } from '../../../domain/store';

// components
import CreateCategoryForm from '../../../../ui/NavPanel/CreateCategoryForm';

type CreateCategoryFormContainer = {
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

const iconsSelector = (state: State) => Object.values(state.icons.byId);

const CreateCategoryFormContainer = memo(
    forwardRef(function (props: CreateCategoryFormContainer, ref: React.ForwardedRef<HTMLFormElement | null>) {
        const { inProgress, isResetForm, isOpen, onCreateCategory } = props;
        const icons = useTodoStore(iconsSelector, shallow);

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
    }),
);

CreateCategoryFormContainer.displayName = 'CreateCategoryFormContainer';

export default CreateCategoryFormContainer;
