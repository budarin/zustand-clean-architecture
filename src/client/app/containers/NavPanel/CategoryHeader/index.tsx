import React, { MouseEventHandler, useState } from 'react';

import CategoryHeader from '../../../../ui/NavPanel/CategoryHeader';
import { useCreateCategory } from '../../../useCases/useCreateCategory';

export function CategoryHeadersContainer() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [inProgress, createcategory] = useCreateCategory();

    const onHandleIsOpen: MouseEventHandler<HTMLButtonElement> = () => {
        setOpen((state) => !state);
    };

    const onCreateCategory: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.target.form[1].disabled = inProgress;

        if (!inProgress) {
            try {
                createcategory({
                    category: event.target.form[0].value,
                    icon_id: 1,
                });

                setOpen(false);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <CategoryHeader
            isOpen={isOpen}
            handleIsOpen={onHandleIsOpen}
            inProgress={inProgress}
            onCreateCategory={onCreateCategory}
        />
    );
}
