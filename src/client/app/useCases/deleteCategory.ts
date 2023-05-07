import { TodoStoreError, useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

import { notifyError } from '../../services/notification';

export async function deleteCategory(id: Category['id']) {
    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[id];

    if (!oldValue) {
        notifyError('Запись отсутствует в базе данных!', { autoClose: 2000 });

        return;
    }

    try {
        store._deleteCategory(id);

        await delay(3000);

        notifyError('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

        store._createCategory(oldValue);
    } catch (err) {
        if (err instanceof TodoStoreError) {
            notifyError(err.message);
        } else {
            notifyError(`Error: ${(err as Error).message}`);
        }
    }
}
