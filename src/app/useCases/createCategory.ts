import { useApi } from '../../services/adapters/useApi.ts';
import { useLogger } from '../../services/adapters/useLogger.ts';
import { useNotification } from '../../services/adapters/useNotification.ts';

import { useTodoStore } from '../../domain/store/store.tsx';
import { validateNewCategory } from '../../domain/entities/category/index.ts';
import { createCategoryNavFilter } from '../../domain/store/navigationFilter/createCategoryNavFilter.ts';

export async function createCategory(
    category: NewCategory,
    isMountedRef: React.MutableRefObject<boolean>,
): Promise<void> {
    const store = useTodoStore.getState();
    const { entity, error } = validateNewCategory(category);

    if (entity) {
        const api = useApi();

        await api.createCategory(entity);

        if (isMountedRef.current === false) {
            return;
        }

        const numbers = Object.keys(store.categories.byId).map(Number);
        const newCategoryId = Math.max(...numbers) + 1;
        entity['category_id'] = newCategoryId;

        store._addCategory(entity);

        // устанавливаем навигационный фильтр на данную категорию
        store.setNavigationFilter(createCategoryNavFilter(newCategoryId, entity.category));
    } else {
        const logger = useLogger();
        const notification = useNotification();

        notification.notifyError(`Ошибка: ${error}`, {
            toastId: 'create_category_error' + category.category,
        });

        logger.error(error);
    }
}
