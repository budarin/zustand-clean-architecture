import { toast } from 'react-toastify';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

export async function updateCategory(category: Category) {
    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[category.id];

    store._updateCategory(category);

    // toast.info('Категория успешно удалена', { autoClose: 1000 });

    await delay(3000);

    toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

    store._updateCategory(oldValue);
}
