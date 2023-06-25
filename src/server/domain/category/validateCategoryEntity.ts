import { validateCategory, validateNewCategory } from '../../../domain/entities/category';

export function validateCategoryEntity(
    category: UnknownObject,
    state: Entities,
    operation: 'create',
): ValidateEntity<NewCategory>;

export function validateCategoryEntity(
    category: UnknownObject,
    state: Entities,
    operation: Exclude<ServerStateEntityOperations, 'create'>,
): ValidateEntity<Category>;

export function validateCategoryEntity(
    category: UnknownObject,
    state: Entities,
    operation: ServerStateEntityOperations,
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

    if ((operation === 'create' || operation === 'update') && isCategoryNameNotUnique(state, entity)) {
        return {
            error: 'Нарушение уникальности имени категории',
        };
    }

    if (operation === 'delete') {
        if (isCategoryAssociatedWithTasks(state, entity.category_id)) {
            return {
                error: 'Нельзя удалить Категорию - с ней связаны задачи!',
            };
        }

        if (isCategoryExists(state, entity.category_id) === false) {
            return {
                error: `Категория "${entity.category_id}" не найдена`,
            };
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
