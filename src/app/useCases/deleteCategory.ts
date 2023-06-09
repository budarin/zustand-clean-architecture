import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { getNotification } from '../../services/adapters/getNotification.ts';

const notification = getNotification();

export async function deleteCategory(category: Category, isMountedRef: React.MutableRefObject<boolean>): Promise<void> {
    if (!isMountedRef.current) {
        return;
    }

    const store = useTodoStore.getState();
    const value = store.categories.byId[category.category_id];

    if (!value) {
        notification.notifyError('Запись отсутствует в базе данных!', { autoClose: 2000 });
        return;
    }

    store.deleteCategory(category);

    try {
        await delay(3000);

        if (!isMountedRef.current) {
            store.addCategory(value);
            return;
        }

        notification.notifyError(`Ошибка: не удалось удалить категорию "${value.category}" - восстанавливаем`, {
            autoClose: 2000,
        });

        store.addCategory(value);
    } catch (err) {
        notification.notifyError(`Error: ${(err as Error).message}`);
        store.addCategory(value);
    }
}
