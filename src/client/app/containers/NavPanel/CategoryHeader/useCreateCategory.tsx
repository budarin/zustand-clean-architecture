import React, { useEffect, useState } from 'react';

import * as logger from '../../../../services/Logger/index.ts';
import * as notification from '../../../../services/Notification/index.ts';

import { createCategory } from '../../../../domain/use_cases/createCategory.ts';

type UseCreateCategory = [
    success: boolean,
    inProgress: boolean,
    createTodo: React.Dispatch<React.SetStateAction<NewCategory | undefined>>,
];

export function useCreateCategory(): UseCreateCategory {
    const [category, setCategory] = useState<NewCategory>();
    const [success, setSuccess] = useState<boolean>(false);
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        const doCreate = async () => {
            if (category === undefined) {
                return;
            }

            setSuccess(false);
            setInProgress(true);

            try {
                await createCategory(category);

                setSuccess(true);
            } catch (error) {
                notification.notifyError(`Ошибка: ${(error as Error).message}`, {
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
