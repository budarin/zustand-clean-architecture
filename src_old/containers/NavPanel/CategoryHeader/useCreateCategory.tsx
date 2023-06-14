import React, { useEffect, useState } from 'react';

import { useLogger } from '../../../../src/app/serviceAdapters/useLogger.ts';
import { createCategory } from '../../../../src/app/useCases/createCategory.ts';
import { useNotification } from '../../../../src/app/serviceAdapters/useNotification.ts';

type UseCreateCategory = [
    success: boolean,
    inProgress: boolean,
    createTodo: React.Dispatch<React.SetStateAction<NewCategory | undefined>>,
];

export function useCreateCategory(): UseCreateCategory {
    const logger = useLogger();
    const notification = useNotification();
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
