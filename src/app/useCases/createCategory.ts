import { getApi } from '../../services/adapters/getApi.ts';
import { getLogger } from '../../services/adapters/getLogger.ts';
import { getNotification } from '../../services/adapters/getNotification.ts';

import { useTodoStore } from '../../domain/store/store.tsx';
import { validateNewCategoryEntity } from '../../domain/entities/category/index.ts';
import { createCategoryNavigationFilter } from '../../domain/store/navigationFilter/createCategoryNavigationFilter.ts';

const api = getApi();
const logger = getLogger();
const notification = getNotification();
const NOT_CATEGORY_OBJECT = 'Объект не является описанием Категории';

export async function createCategory(
    category: UnknownObject,
    isMountedRef: React.MutableRefObject<boolean>,
): Promise<void> {
    if (!isMountedRef.current) {
        return;
    }

    const { entity, error: validateError } = validateNewCategoryEntity(category);

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
            notification.notifyError(
                `Ошибка: Не удалось создать категорию ${entity.category}. Попробуйте позже еще раз.`,
                {
                    toastId: 'create_category_error' + entity.category,
                },
            );

            logger.error(error);
            return;
        }

        if (!isMountedRef.current) {
            return;
        }

        const store = useTodoStore.getState();
        store.addCategory(result);

        // устанавливаем навигационный фильтр на данную категорию
        store.setNavigationFilter(createCategoryNavigationFilter(result.category_id, entity.category));
    } catch (error) {
        notification.notifyError(`Ошибка: ${error}`, {
            toastId: 'create_category_error' + entity.category,
        });

        logger.error((error as Error).message);
        return;
    }
}
