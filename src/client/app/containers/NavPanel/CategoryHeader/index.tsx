import React, { FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';

import { useCreateCategory } from '../../../useCases/useCreateCategory';

// components
import CategoryHeader from '../../../../ui/NavPanel/CategoryHeader';

function CategoryHeadersContainer() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [success, inProgress, createcategory] = useCreateCategory();

    useEffect(() => {
        if (success && isOpen) {
            setOpen(false);
        }
    }, [success]);

    const onHandleIsOpen: MouseEventHandler<HTMLButtonElement> = () => {
        setOpen((state) => !state);
    };

    const onCreateCategory: FormEventHandler<HTMLFormElement> = (event) => {
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
    };

    return (
        <CategoryHeader
            isOpen={isOpen}
            isResetForm={success}
            handleIsOpen={onHandleIsOpen}
            inProgress={inProgress}
            onCreateCategory={onCreateCategory}
        />
    );
}

export default CategoryHeadersContainer;
