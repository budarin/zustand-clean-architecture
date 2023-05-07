import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';
import { notifyError } from '../../services/notification';

export async function updateCategory(category: Category) {
    const store = useTodoStore.getState();
    const oldValue = store.categories.byId[category.category_id];

    store._updateCategory(category);

    // toast.info('Категория успешно удалена', { autoClose: 1000 });

    await delay(3000);

    notifyError('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

    store._updateCategory(oldValue);
}
