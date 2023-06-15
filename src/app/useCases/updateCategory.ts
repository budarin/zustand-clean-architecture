import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

export async function updateCategory(category: Category): Promise<void> {
    const notification = useNotification();
    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[category.category_id];

    store._updateCategory(category);

    // toast.info('Категория успешно удалена', { autoClose: 1000 });

    await delay(3000);

    notification.notifyError(`Ошибка: не удалось удалить категорию ${oldValue.category} - восстанавливаем`, {
        autoClose: 2000,
    });

    store._updateCategory(oldValue);
}
