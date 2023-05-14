import React, { FormEventHandler, MouseEventHandler, useCallback, useEffect, useState } from 'react';

import { useCreateCategory } from '../../../useCases/useCreateCategory';

// components
import CreateCategoryFormContainer from '../CreateCategoryForm';
import CategoryHeader from '../../../../ui/NavPanel/CategoryHeader';

function CategoryHeadersContainer() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [success, inProgress, createcategory] = useCreateCategory();

    useEffect(() => {
        if (success && isOpen) {
            setOpen(false);
        }
    }, [success]);

    const onHandleIsOpen: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        setOpen((state) => !state);
    }, []);

    const onCreateCategory: FormEventHandler<HTMLFormElement> = useCallback(
        (event) => {
            event.preventDefault();

            (event.currentTarget[1] as HTMLInputElement).disabled = inProgress;

            if (!inProgress) {
                const formData = new FormData(event.currentTarget);
                const category = formData.get('category') as string;

                if (!category) {
                    return;
                }

                const categoryObject = {
                    category,
                    icon_id: Number(formData.get('icon_id')),
                };

                try {
                    createcategory(categoryObject);
                } catch (error) {
                    console.log(error);
                }
            }
        },
        [inProgress],
    );

    return (
        <CategoryHeader isOpen={isOpen} handleIsOpen={onHandleIsOpen}>
            <CreateCategoryFormContainer
                inProgress={inProgress}
                isResetForm={success}
                isOpen={isOpen}
                onCreateCategory={onCreateCategory}
            />
        </CategoryHeader>
    );
}

export default CategoryHeadersContainer;
