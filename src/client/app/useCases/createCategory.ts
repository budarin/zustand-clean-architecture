import { logger } from '../../services/logger';
import { useTodoStore } from '../domain/store';
import * as api from '../../services/api/api.ts';
import { notifyError } from '../../services/notification';
import { validateNewCategory } from '../../../common/domain/category/validation';
import { createCategoryNavFilter } from '../action_creators/createCategoryNavFilter';

export async function createCategory(category: NewCategory) {
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
        notifyError(`Ошибка: ${error}`, {
            toastId: 'create_todo_error' + category.category,
        });

        logger.error(error);
    }
}
