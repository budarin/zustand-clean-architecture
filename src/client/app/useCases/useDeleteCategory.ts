import { toast } from 'react-toastify';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

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

            setError(undefined);
            setInProgress(true);

            const store = useTodoStore.getState();
            const oldValue = store.categories.byId[categoryId];

            if (!oldValue) {
                setError('Нет ткой записи!');
                setInProgress(false);
                toast.error('Запись отсутствует в базе данных!', { autoClose: 2000 });
                return;
            }

            store._deleteCategory(categoryId);

            // toast.info('Категория успешно удалена', { autoClose: 1000 });

            await delay(3000);

            setError('Сеть сбойнула');

            toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

            store._createCategory(oldValue);

            setInProgress(false);
        };

        categoryId && doDelete();
    }, [categoryId]);

    return [{ inProgress, error }, setCategoryId];
}