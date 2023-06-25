import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

const notification = useNotification();

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

    store._deleteCategory(category);

    try {
        await delay(3000);

        if (!isMountedRef.current) {
            store._addCategory(value);
            return;
        }

        notification.notifyError(`Ошибка: не удалось удалить категорию "${value.category}" - восстанавливаем`, {
            autoClose: 2000,
        });

        store._addCategory(value);
    } catch (err) {
        notification.notifyError(`Error: ${(err as Error).message}`);
        store._addCategory(value);
    }
}
