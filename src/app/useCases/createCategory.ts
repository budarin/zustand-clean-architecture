import { useApi } from '../../services/adapters/useApi.ts';
import { useLogger } from '../../services/adapters/useLogger.ts';
import { useNotification } from '../../services/adapters/useNotification.ts';

import { useTodoStore } from '../../domain/store/store.tsx';
import { validateNewCategory } from '../../domain/entities/category/index.ts';
import { createCategoryNavFilter } from '../../domain/store/navigationFilter/createCategoryNavFilter.ts';

const api = useApi();
const logger = useLogger();
const notification = useNotification();
const NOT_CATEGORY_OBJECT = 'Объект не является описанием Категории';

export async function createCategory(
    category: NewCategory,
    isMountedRef: React.MutableRefObject<boolean>,
): Promise<void> {
    if (!isMountedRef.current) {
        return;
    }

    const { entity, error: validateError } = validateNewCategory(category);

    if (validateError) {
        notification.notifyError(`Ошибка: ${validateError}`, {
            toastId: 'create_category_error' + category.category,
        });

        logger.error(validateError);
    }

    if (!entity) {
        notification.notifyError(NOT_CATEGORY_OBJECT, {
            toastId: 'create_category_error' + NOT_CATEGORY_OBJECT,
        });

        logger.error(NOT_CATEGORY_OBJECT);
        return;
    }

    try {
        const { result, error } = await api.createCategory(entity);

        if (error) {
            notification.notifyError(`Ошибка: Не удалось создать категорию ${category.category}`, {
                toastId: 'create_category_error' + category.category,
            });

            logger.error(error);
            return;
        }

        if (!isMountedRef.current) {
            return;
        }

        const store = useTodoStore.getState();
        store._addCategory(result);

        // устанавливаем навигационный фильтр на данную категорию
        store.setNavigationFilter(createCategoryNavFilter(result.category_id, entity.category));
    } catch (error) {
        notification.notifyError(`Ошибка: ${error}`, {
            toastId: 'create_category_error' + category.category,
        });

        logger.error((error as Error).message);
        return;
    }
}
