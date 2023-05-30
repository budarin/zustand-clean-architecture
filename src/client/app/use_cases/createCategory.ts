import { type API } from '../../services/API/index.ts';
import { type Logger } from '../../services/Logger/index.ts';
import { type NotificationMethod } from '../../services/Notification/index.ts';

import { useTodoStore } from '../domain/store.tsx';
import { validateNewCategory } from '../../../common/domain/category/validation.ts';
import { createCategoryNavFilter } from '../action_creators/createCategoryNavFilter.ts';

export async function createCategory(
    category: NewCategory,
    notifyError: NotificationMethod,
    logError: Logger['error'],
    api_createCategory: API['createCategory'],
): Promise<void> {
    const store = useTodoStore.getState();
    const { entity, error } = validateNewCategory(category);

    if (entity) {
        await api_createCategory(entity);

        const numbers = Object.keys(store.categories.byId).map(Number);
        const newCategoryId = Math.max(...numbers) + 1;
        entity['category_id'] = newCategoryId;

        store._addCategory(entity);

        // устанавливаем навигационный фильтр на данную категорию
        store.setNavigationFilter(createCategoryNavFilter(newCategoryId, entity.category));
    } else {
        notifyError(`Ошибка: ${error}`, {
            toastId: 'create_todo_error' + category.category,
        });

        logError(error);
    }
}
