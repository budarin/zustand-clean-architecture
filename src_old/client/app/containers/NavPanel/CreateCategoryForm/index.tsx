import { forwardRef, memo } from 'react';
import type { FormEventHandler, ForwardedRef } from 'react';

import { getIconCollection } from '../../../selectors/getIconCollection';

// components
import CreateCategoryForm from '../../../../ui/NavPanel/CreateCategoryForm';

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
