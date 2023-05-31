import { notification } from '../ports/notification.ts';

import { useTodoStore } from '../entities/store.tsx';
import { TodoStoreError } from '../entities/TodoStoreError.tsx';
import { delay } from '../../../common/utils/promises/delay.ts';

const { notifyError } = notification;

export async function deleteCategory(id: Category['category_id']): Promise<void> {
    const store = useTodoStore.getState();
    const value = store.categories.byId[id];

    if (!value) {
        notifyError('Запись отсутствует в базе данных!', { autoClose: 2000 });
        return;
    }

    try {
        store._deleteCategory(id);

        await delay(3000);
        notifyError(`Ошибка: не удалось удалить категорию "${value.category}" - восстанавливаем`, { autoClose: 2000 });

        store._addCategory(value);
    } catch (err) {
        if (err instanceof TodoStoreError) {
            notifyError(err.message);
        } else {
            notifyError(`Error: ${(err as Error).message}`);
        }
    }
}
