import React, { useEffect, useRef, useState } from 'react';

import { getLogger } from '../../../../src/services/adapters/getLogger.ts';
import { createCategory } from '../../../../src/app/useCases/createCategory.ts';
import { getNotification } from '../../../../src/services/adapters/getNotification.ts';

const logger = getLogger();
const notification = getNotification();

type UseCreateCategory = [
    success: boolean,
    inProgress: boolean,
    createTodo: React.Dispatch<React.SetStateAction<NewCategory | undefined>>,
];

export function useCreateCategory(): UseCreateCategory {
    const isMountedRef = useRef(true);
    const [success, setSuccess] = useState<boolean>(false);
    const [category, setCategory] = useState<NewCategory>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        isMountedRef.current = true;

        const doCreate = async () => {
            if (category === undefined || isMountedRef.current === false) {
                return;
            }

            setSuccess(false);
            setInProgress(true);

            try {
                await createCategory(category, isMountedRef);
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

        return () => {
            isMountedRef.current = false;
        };
    }, [category]);

    return [success, inProgress, setCategory];
}
