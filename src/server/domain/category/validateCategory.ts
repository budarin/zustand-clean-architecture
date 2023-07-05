import { createValidationError } from '../../../domain/entities/validation_utils/createValidationError.ts';
import { validateCategoryEntity, validateNewCategoryEntity } from '../../../domain/entities/category/index.ts';

export function validateCategory(
    category: UnknownObject,
    state: Entities,
    operation: 'create',
): ValidateEntity<NewCategory>;

export function validateCategory(
    category: UnknownObject,
    state: Entities,
    operation: Exclude<ServerStateEntityOperations, 'create'>,
): ValidateEntity<Category>;

export function validateCategory(
    category: UnknownObject,
    state: Entities,
    operation: ServerStateEntityOperations,
): ValidateEntity<NewCategory | Category> {
    let result: ValidateEntity<NewCategory | Category>;

    if (operation === 'create') {
        result = validateNewCategoryEntity(category) as ValidateEntity<NewCategory>;
    } else {
        result = validateCategoryEntity(category) as ValidateEntity<Category>;
    }

    if (result.error !== undefined) {
        return result;
    }

    const entity = result.entity as Category;

    if ((operation === 'create' || operation === 'update') && isCategoryNameNotUnique(state, entity)) {
        return createValidationError('Нарушение уникальности имени категории');
    }

    if (operation === 'delete') {
        if (isCategoryAssociatedWithTasks(state, entity.category_id)) {
            return createValidationError('Нельзя удалить Категорию - с ней связаны задачи!');
        }

        if (isCategoryExists(state, entity.category_id) === false) {
            return createValidationError(`Категория "${entity.category}" с указанным ключем не найдена`);
        }
    }

    return {
        entity: result.entity,
    };
}

function isCategoryNameNotUnique(state: Entities, entity: Category) {
    return state.categories.find(
        (item) => item.category === entity.category && item.category_id !== entity.category_id,
    );
}

function isCategoryAssociatedWithTasks(state: Entities, category_id: number) {
    return state.todos.some((item) => item.category_id === category_id);
}

function isCategoryExists(state: Entities, category_id: number) {
    return state.categories.some((category) => category.category_id === category_id);
}
