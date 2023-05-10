import React, { FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';

import { useCreateCategory } from '../../../../useCases/useCreateCategory';

// components
import CategoryHeader from '../../../../../ui/NavPanel/CategoryHeader';

function CategoryHeadersContainer() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [success, inProgress, createcategory] = useCreateCategory();

    useEffect(() => {
        if (success) {
            setOpen(false);
        }
    }, [success]);

    const onHandleIsOpen: MouseEventHandler<HTMLButtonElement> = () => {
        setOpen((state) => !state);
    };

    const onCreateCategory: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        event.target[1].disabled = inProgress;

        if (!inProgress) {
            try {
                createcategory({
                    category: event.target[0].value,
                    icon_id: 1,
                });
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
