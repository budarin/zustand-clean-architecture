import { validateCategoryEntity } from '../../entities/category';
import { createValidationError } from '../../entities/validation_utils/createValidationError';

export function validateCategory(
    category: UnknownObject,
    state: TodosState,
    operation: ClientStateEntityOperations,
): ValidateEntity<Category> {
    const result = validateCategoryEntity(category) as ValidateEntity<Category>;

    if (result.error !== undefined) {
        return result;
    }

    const entity = result.entity as Category;

    if (operation === 'add' || operation === 'update') {
        if (isCategoryNameNotUnique(state, entity)) {
            return createValidationError('Нарушение уникальности имени категории');
        }

        if (isCategoryIdNotUnique(state, entity.category_id)) {
            return createValidationError('Нарушение уникальности идентификатора категории');
        }
    }

    if (operation === 'delete') {
        if (isCategoryAssociatedWithTasks(state, entity.category_id)) {
            return createValidationError('Нельзя удалить Категорию - с ней связаны задачи!');
        }

        if (!isCategoryExists(state, entity.category_id)) {
            return createValidationError(`Категория "${entity.category}" с указанным ключем не найдена`);
        }
    }

    return {
        entity: result.entity,
    };
}

function isCategoryNameNotUnique(state: TodosState, entity: Category): boolean {
    return Object.values(state.categories.byId).some(
        (item) => item.category === entity.category && item.category_id !== entity.category_id,
    );
}

function isCategoryIdNotUnique(state: TodosState, category_id: number): boolean {
    return Object.values(state.categories.byId).some((item) => item.category_id === category_id);
}

function isCategoryAssociatedWithTasks(state: TodosState, category_id: number): boolean {
    return Object.values(state.todos.byId).some((item) => item.category_id === category_id);
}

function isCategoryExists(state: TodosState, category_id: number): boolean {
    return Object.values(state.categories.byId).some((category) => category.category_id === category_id);
}
