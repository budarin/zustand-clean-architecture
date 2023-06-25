import { validateCategory, validateNewCategory } from '../../entities/category';

export function validateCategoryEntity(
    category: UnknownObject,
    state: TodosState,
    operation: 'create',
): ValidateEntity<NewCategory>;

export function validateCategoryEntity(
    category: UnknownObject,
    state: TodosState,
    operation: Exclude<ClientStateEntityOperations, 'create'>,
): ValidateEntity<Category>;

export function validateCategoryEntity(
    category: UnknownObject,
    state: TodosState,
    operation: ClientStateEntityOperations,
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

    if (operation === 'update' && isCategoryNameNotUnique(state, entity)) {
        return {
            error: 'Нарушение уникальности имени категории',
        };
    }

    if (operation === 'add' && isCategoryIdNotUnique(state, entity.category_id)) {
        return {
            error: 'Нарушение уникальности идентификатора категории',
        };
    }

    if (operation === 'delete') {
        if (isCategoryAssociatedWithTasks(state, entity.category_id)) {
            return {
                error: 'Нельзя удалить Категорию - с ней связаны задачи!',
            };
        }

        if (!isCategoryExists(state, entity.category_id)) {
            return {
                error: `Категория "${entity.category_id}" не найдена`,
            };
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

function isCategoryIdNotUnique(state: TodosState, categoryId: number): boolean {
    return Object.values(state.categories.byId).some((item) => item.category_id === categoryId);
}

function isCategoryAssociatedWithTasks(state: TodosState, categoryId: number): boolean {
    return Object.values(state.todos.byId).some((item) => item.category_id === categoryId);
}

function isCategoryExists(state: TodosState, categoryId: number): boolean {
    return Object.values(state.categories.byId).some((category) => category.category_id === categoryId);
}
