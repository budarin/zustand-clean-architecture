import { useTodoStore } from '../domain/store';
import { notifyError } from '../../services/notification';
import { delay } from '../../../common/utils/promises/delay';

export async function updateCategory(category: Category) {
    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[category.category_id];

    store._updateCategory(category);

    // toast.info('Категория успешно удалена', { autoClose: 1000 });

    await delay(3000);

    notifyError(`Ошибка: не удалось удалить категорию ${oldValue.category} - восстанавливаем`, { autoClose: 2000 });

    store._updateCategory(oldValue);
}
