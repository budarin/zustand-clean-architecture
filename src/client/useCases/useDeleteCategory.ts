import { toast } from 'react-toastify';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../common/promises/delay';

type UseDeleteCategory = [
    state: {
        inProgress: boolean;
        error: string | undefined;
    },
    doDelete: Dispatch<SetStateAction<number | undefined>>,
];

export function useDeleteCategory(): UseDeleteCategory {
    const [error, setError] = useState<string>();
    const [categoryId, setCategoryId] = useState<number>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        const doDelete = async () => {
            if (categoryId === undefined) {
                return;
            }

            setInProgress(true);

            const { categories, deleteCategory, createCategory } = useTodoStore.getState();
            const oldValue = categories.byId[categoryId];

            if (!oldValue) {
                setError('Нет ткой записи!');
                setInProgress(false);
                toast.error('Запись отсутствует в базе данных!', { autoClose: 2000 });
                return;
            }

            deleteCategory(categoryId);

            toast.info('Категория успешно удалена', { autoClose: 1000 });

            await delay(3000);

            setError('Сеть сбойнула');

            toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

            createCategory(oldValue);

            setInProgress(false);
        };

        doDelete();
    }, [categoryId]);

    return [{ inProgress, error }, setCategoryId];
}
