import { useTodoStore } from '../domain/store';
import { delay } from '../../common/promises/delay';
import { notifyError } from '../services/notification';
import { TodoStoreError } from '../domain/TodoStoreError';

export async function deleteCategory(id: Category['category_id']) {
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

        store._createCategory(value);
    } catch (err) {
        if (err instanceof TodoStoreError) {
            notifyError(err.message);
        } else {
            notifyError(`Error: ${(err as Error).message}`);
        }
    }
}
