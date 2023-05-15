import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { createCategory } from '../../services/api/api';
import { notifyError } from '../../services/notification';
import { validateNewCategory } from '../../../common/domain/category/validation';

type UseCreateCategory = [
    success: boolean,
    inProgress: boolean,
    createTodo: Dispatch<SetStateAction<NewCategory | undefined>>,
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

            const store = useTodoStore.getState();
            const { entity, error } = validateNewCategory(category);

            try {
                if (entity) {
                    await createCategory(entity);

                    const numbers = Object.keys(store.categories.byId).map(Number);
                    const newCategoryId = Math.max(...numbers) + 1;

                    store._createCategory({ ...category, category_id: newCategoryId });

                    setSuccess(true);
                } else {
                    notifyError(`Ошибка: ${error}`, {
                        toastId: 'create_todo_error' + category.category,
                    });
                }
            } catch (error) {
                notifyError(`Ошибка: ${(error as Error).message}`, {
                    toastId: 'create_todo_error' + category.category,
                });

                console.log(error);
            } finally {
                setInProgress(false);
            }
        };

        category && doCreate();
    }, [category]);

    return [success, inProgress, setCategory];
}
