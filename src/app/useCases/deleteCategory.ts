import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { TodoStoreError } from '../../domain/store/TodoStoreError.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

export async function deleteCategory(id: Category['category_id']): Promise<void> {
    const notification = useNotification();
    const store = useTodoStore.getState();
    const value = store.categories.byId[id];

    if (!value) {
        notification.notifyError('Запись отсутствует в базе данных!', { autoClose: 2000 });
        return;
    }

    try {
        store._deleteCategory(id);

        await delay(3000);
        notification.notifyError(`Ошибка: не удалось удалить категорию "${value.category}" - восстанавливаем`, {
            autoClose: 2000,
        });

        store._addCategory(value);
    } catch (err) {
        if (err instanceof TodoStoreError) {
            notification.notifyError(err.message);
        } else {
            notification.notifyError(`Error: ${(err as Error).message}`);
        }
    }
}
