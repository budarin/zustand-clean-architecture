import { api } from '../ports/api.ts';
import { logger } from '../ports/logger.ts';
import { notification } from '../ports/notification.ts';

import { useTodoStore } from '../entities/store.tsx';
import { validateNewCategory } from '../../../common/domain/category/validation.ts';
import { createCategoryNavFilter } from '../../app/action_creators/createCategoryNavFilter.ts';

export async function createCategory(category: NewCategory): Promise<void> {
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
