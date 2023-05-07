import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';
import { notifyError } from '../../services/notification';

type UseCreateCategory = [inProgress: boolean, createTodo: Dispatch<SetStateAction<Category | undefined>>];

export function useCreateCategory(): UseCreateCategory {
    const [category, setCategory] = useState<Category>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        const doCreate = async () => {
            if (category === undefined) {
                return;
            }

            try {
                setInProgress(true);

                const store = useTodoStore.getState();

                await delay(3000);

                store._createCategory(category);
            } catch (error) {
                const errorMessage = `Упс! Не удалось создать ${category.category}`;

                notifyError(errorMessage, {
                    toastId: 'create_todo_error' + category.category_id,
                });

                setInProgress(false);
            }
        };

        category && doCreate();
    }, [category]);

    return [inProgress, setCategory];
}
