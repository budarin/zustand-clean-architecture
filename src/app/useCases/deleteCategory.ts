import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

export async function deleteCategory(
    id: Category['category_id'],
    isMountedRef: React.MutableRefObject<boolean>,
): Promise<void> {
    const notification = useNotification();
    const store = useTodoStore.getState();
    const value = store.categories.byId[id];

    if (!value) {
        notification.notifyError('Запись отсутствует в базе данных!', { autoClose: 2000 });
        return;
    }

    store._deleteCategory(id);

    try {
        await delay(3000);

        if (isMountedRef.current === false) {
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
