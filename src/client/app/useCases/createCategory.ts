import { toast } from 'react-toastify';
import { type Logger } from '../../services/logger';
import { type API } from '../../services/api/api.ts';

import { useTodoStore } from '../domain/store';
import { validateNewCategory } from '../../../common/domain/category/validation';
import { createCategoryNavFilter } from '../action_creators/createCategoryNavFilter';

export async function createCategory(
    category: NewCategory,
    notifyError: typeof toast.error,
    logger: Logger,
    createCategory: API['createCategory'],
) {
    const store = useTodoStore.getState();
    const { entity, error } = validateNewCategory(category);

    if (entity) {
        await createCategory(entity);

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