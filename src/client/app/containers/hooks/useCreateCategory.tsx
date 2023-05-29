import React, { useEffect, useState } from 'react';

import { createCategory } from '../../useCases/createCategory.ts';
import { notifyError } from '../../../services/notification/index.ts';
import { logger } from '../../../services/logger/index.ts';

type UseCreateCategory = [
    success: boolean,
    inProgress: boolean,
    createTodo: React.Dispatch<React.SetStateAction<NewCategory | undefined>>,
];

export function useCreateCategory(): UseCreateCategory {
    const [category, setCategory] = useState<NewCategory>();
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    useEffect(() => {
        const doCreate = async () => {
            if (category === undefined) {
                return;
            }

            setSuccess(false);
            setInProgress(true);

            try {
                createCategory(category);
            } catch (error) {
                notifyError(`Ошибка: ${(error as Error).message}`, {
                    toastId: 'create_todo_error' + category.category,
                });

                logger.error((error as Error).message);
            } finally {
                setInProgress(false);
            }
        };

        category && doCreate();
    }, [category]);

    return [success, inProgress, setCategory];
}
