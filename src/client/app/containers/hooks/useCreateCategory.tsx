import React, { useEffect, useState } from 'react';

import * as API from '../../../services/API/index.ts';
import * as Logger from '../../../services/Logger/index.ts';
import { createCategory } from '../../useCases/createCategory.ts';
import { notifyError } from '../../../services/Notification/index.ts';

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
                createCategory(category, notifyError, Logger, API.createCategory);

                setSuccess(true);
            } catch (error) {
                notifyError(`Ошибка: ${(error as Error).message}`, {
                    toastId: 'create_todo_error' + category.category,
                });

                Logger.error((error as Error).message);
            } finally {
                setInProgress(false);
            }
        };

        category && doCreate();
    }, [category]);

    return [success, inProgress, setCategory];
}
