import { useOnClickOutside } from 'usehooks-ts';
import { FormEventHandler, MouseEventHandler, memo, useCallback, useEffect, useRef, useState } from 'react';

import * as logger from '../../../../services/Llogger/index.ts';
import { isNotificationElement } from './isNotificationElement';
import { useCreateCategory } from '../../hooks/useCreateCategory.tsx';

// components
import CreateCategoryFormContainer from '../CreateCategoryForm';
import CategoryHeader from '../../../../ui/NavPanel/CategoryHeader';

let timer: NodeJS.Timeout;

const CategoryHeadersContainer = memo(function () {
    const [isOpen, setOpen] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const [success, inProgress, createcategory] = useCreateCategory();

    useEffect(() => {
        let mounted = true;

        if (mounted && success && isOpen) {
            setOpen(false);
        }

        return () => {
            mounted = false;
        };
    }, [success]);

    const toggleOpen: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
        setOpen((state) => !state);
    }, []);

    const onClickOutside = (event: Event) => {
        if (isOpen === false) {
            return;
        }

        if (isNotificationElement(event.target as HTMLElement)) {
            return;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            if (isOpen) {
                setOpen(false);
            }
        }, 150);
    };

    useOnClickOutside(formRef, onClickOutside);

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
                    logger.error((error as Error).message);
                }
            }
        },
        [inProgress],
    );

    return (
        <CategoryHeader isOpen={isOpen} toggleOpen={toggleOpen}>
            <CreateCategoryFormContainer
                ref={formRef}
                inProgress={inProgress}
                isResetForm={success}
                isOpen={isOpen}
                onCreateCategory={onCreateCategory}
            />
        </CategoryHeader>
    );
});

CategoryHeadersContainer.displayName = 'CategoryHeadersContainer';

export default CategoryHeadersContainer;
