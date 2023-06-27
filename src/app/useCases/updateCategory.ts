import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

const notification = useNotification();

export async function updateCategory(category: Category, isMountedRef: React.MutableRefObject<boolean>): Promise<void> {
    if (!isMountedRef.current) {
        return;
    }

    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[category.category_id];

    store.updateCategory(category);

    // toast.info('Категория успешно удалена', { autoClose: 1000 });

    await delay(3000);

    if (!isMountedRef.current) {
        store.updateCategory(oldValue);
        return;
    }

    notification.notifyError(`Ошибка: не удалось удалить категорию ${oldValue.category} - восстанавливаем`, {
        autoClose: 2000,
    });

    store.updateCategory(oldValue);
}
