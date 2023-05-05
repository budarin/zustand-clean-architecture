import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store.ts';
import { delay } from '../../common/promises/delay.ts';

export async function deleteCategory(id: Category['id']) {
    const { categories, deleteCategory, createCategory } = useTodoStore.getState();

    const oldValue = categories.byId[4];

    deleteCategory(4);
    toast.info('Категория успешно удалена', { autoClose: 2000 });

    await delay(3000);

    toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });
    createCategory(oldValue);
}
