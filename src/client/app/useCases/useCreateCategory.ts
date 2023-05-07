import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';
import { notifyError } from '../../services/notification';

type UseCreateCategory = [inProgress: boolean, createTodo: Dispatch<SetStateAction<NewCategory | undefined>>];

export function useCreateCategory(): UseCreateCategory {
    const [category, setCategory] = useState<NewCategory>();
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

                const numbers = Object.keys(store.categories.byId).map(Number);
                const newCategoryId = Math.max(...numbers) + 1;
                store._createCategory({ ...category, category_id: newCategoryId });
            } catch (error) {
                console.log(error);
                const errorMessage = `Упс! Не удалось создать ${category.category}`;

                notifyError(errorMessage, {
                    toastId: 'create_todo_error' + category.category,
                });

                setInProgress(false);
            }
        };

        category && doCreate();
    }, [category]);

    return [inProgress, setCategory];
}
