import { useApi } from '../../services/adapters/useApi.ts';
import { useLogger } from '../../services/adapters/useLogger.ts';
import { useNotification } from '../../services/adapters/useNotification.ts';

import { useTodoStore } from '../../domain/store/store.tsx';
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

    try {
        const { result, error } = await api.createCategory(category);

        if (error) {
            notification.notifyError(
                `Ошибка: Не удалось создать категорию ${category.category}. Попробуйте позже еще раз.`,
                {
                    toastId: 'create_category_error' + category.category,
                },
            );

            logger.error(error);
            return;
        }

        if (!isMountedRef.current) {
            return;
        }

        const store = useTodoStore.getState();
        store._addCategory(result);

        // устанавливаем навигационный фильтр на данную категорию
        store.setNavigationFilter(createCategoryNavFilter(result.category_id, result.category));
    } catch (error) {
        notification.notifyError(`Ошибка: ${error}`, {
            toastId: 'create_category_error' + category.category,
        });

        logger.error((error as Error).message);
        return;
    }
}
