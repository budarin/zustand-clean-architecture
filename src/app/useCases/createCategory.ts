import { useApi } from '../serviceAdapters/useApi.ts';
import { useLogger } from '../serviceAdapters/useLogger.ts';
import { useNotification } from '../serviceAdapters/useNotification.ts';

import { useTodoStore } from '../../domain/store/store.tsx';
import { validateNewCategory } from '../../domain/entities/category/validation.ts';
import { createCategoryNavFilter } from '../../domain/entities/navigationFilter/createCategoryNavFilter.ts';

export async function createCategory(category: NewCategory): Promise<void> {
    const api = useApi();
    const logger = useLogger();
    const notification = useNotification();

    const store = useTodoStore.getState();
    const { entity, error } = validateNewCategory(category);

    if (entity) {
        await api.createCategory(entity);

        const numbers = Object.keys(store.categories.byId).map(Number);
        const newCategoryId = Math.max(...numbers) + 1;
        entity['category_id'] = newCategoryId;

        store._addCategory(entity);

        // устанавливаем навигационный фильтр на данную категорию
        store.setNavigationFilter(createCategoryNavFilter(newCategoryId, entity.category));
    } else {
        notification.notifyError(`Ошибка: ${error}`, {
            toastId: 'create_category_error' + category.category,
        });

        logger.error(error);
    }
}
