import React, { FormEventHandler, ForwardedRef, forwardRef, memo } from 'react';

import { getIconCollection } from '../../../../src/app/selectors/getIconCollection.ts';

// components
import CreateCategoryForm from '../../../components/NavPanel/CreateCategoryForm/index.tsx';

type CreateCategoryFormContainer = {
    isResetForm: boolean;
    isOpen: boolean;
    inProgress: boolean;
    onCreateCategory: FormEventHandler<HTMLFormElement>;
};

const CreateCategoryFormContainer = memo(
    forwardRef(function (props: CreateCategoryFormContainer, ref: ForwardedRef<HTMLFormElement | null>) {
        const { inProgress, isResetForm, isOpen, onCreateCategory } = props;

        const icons = getIconCollection();

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
