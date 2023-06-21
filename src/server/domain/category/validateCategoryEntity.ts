import { validateCategory, validateNewCategory } from '../../../domain/entities/category';

export function validateCategoryEntity(
    category: UnknownObject,
    state: Entities,
    operation: 'create',
): ValidateEntity<NewCategory>;

export function validateCategoryEntity(
    category: UnknownObject,
    state: Entities,
    operation: Exclude<StateEntityOperations, 'create'>,
): ValidateEntity<Category>;

export function validateCategoryEntity(
    category: UnknownObject,
    state: Entities,
    operation: StateEntityOperations,
): ValidateEntity<NewCategory | Category> {
    const result = operation === 'create' ? validateNewCategory(category) : validateCategory(category);

    if (result.error !== undefined) {
        return result;
    }

    if (operation === 'create') {
        const entity = result.entity as NewCategory;

        if (state.categories.find((item) => item.category === entity.category)) {
            return {
                error: 'Нарушение уникальности имени категории',
            };
        }
    } else {
        const entity = result.entity as Category;

        // для операций 'add', 'create', 'update'
        if (operation !== 'delete' && state.categories.find((item) => item.category_id === entity.category_id)) {
            return {
                error: 'Нарушение уникальности идентификатора категории',
            };
        }

        if (operation === 'delete' && state.todos.some((item) => item.category_id === entity.category_id)) {
            return {
                error: 'Нельзя удалить Категорию - с ней связаны задачи!',
            };
        }
    }

    return {
        entity: result.entity,
    };
}
