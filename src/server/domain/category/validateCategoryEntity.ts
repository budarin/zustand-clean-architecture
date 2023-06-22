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
    let result: ValidateEntity<NewCategory | Category>;

    if (operation === 'create') {
        result = validateNewCategory(category) as ValidateEntity<NewCategory>;
    } else {
        result = validateCategory(category) as ValidateEntity<Category>;
    }

    if (result.error !== undefined) {
        return result;
    }

    const entity = result.entity as Category;

    if (
        (operation === 'add' || operation === 'create' || operation === 'update') &&
        state.categories.find((item) => item.category === entity.category && item.category_id !== entity.category_id)
    ) {
        return {
            error: 'Нарушение уникальности имени категории',
        };
    }

    if (operation === 'add' && state.categories.find((item) => item.category_id === entity.category_id)) {
        return {
            error: 'Нарушение уникальности идентификатора категории',
        };
    }

    if (operation === 'delete') {
        if (state.todos.some((item) => item.category_id === entity.category_id)) {
            return {
                error: 'Нельзя удалить Категорию - с ней связаны задачи!',
            };
        }

        if (state.categories.some((category) => category.category_id === entity.category_id) === false) {
            return {
                error: `Категория "${entity.category_id}" не найдена`,
            };
        }
    }

    return {
        entity: result.entity,
    };
}
