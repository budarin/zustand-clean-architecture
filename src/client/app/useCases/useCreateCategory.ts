import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';
import { notifyError } from '../../services/notification';
import { validateNewCategory } from '../domain/category/validation';

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
                const { isValid, error } = validateNewCategory(category);

                if (isValid === false) {
                    notifyError(`Упс! Ошибка в объекте ${category.category}: ${error}`, {
                        toastId: 'create_todo_error' + category.category,
                    });
                } else {
                    const store = useTodoStore.getState();

                    await delay(3000);

                    const numbers = Object.keys(store.categories.byId).map(Number);
                    const newCategoryId = Math.max(...numbers) + 1;
                    store._createCategory({ ...category, category_id: newCategoryId });
                }
            } catch (error) {
                console.log(error);
                notifyError(`Упс! Не удалось создать ${category.category}`, {
                    toastId: 'create_todo_error' + category.category,
                });
            } finally {
                setInProgress(false);
            }
        };

        category && doCreate();
    }, [category]);

    return [inProgress, setCategory];
}
