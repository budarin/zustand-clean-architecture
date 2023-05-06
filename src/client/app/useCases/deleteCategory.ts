import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

export async function deleteCategory(id: Category['id']) {
    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[id];

    if (!oldValue) {
        toast.error('Запись отсутствует в базе данных!', { autoClose: 2000 });
        return;
    }

    store._deleteCategory(id);

    // toast.info('Категория успешно удалена', { autoClose: 1000 });

    await delay(3000);

    toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

    store._createCategory(oldValue);
}
