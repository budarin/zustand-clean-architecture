import { validateCategory } from '../../../../src/domain/entities/category/validation';

export function validateCategoryEntity(icon: UnknownObject, state: TodosState): ValidateEntity<Category> {
    const result = validateCategory(icon);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (state.categories.ids.includes(entity.category_id) === true) {
        return {
            error: `Нарушение уникальности ключа icons.icon_id!`,
        };
    }

    if (Object.values(state.categories.byId).find((item) => item.category === entity.category)) {
        return {
            error: `Нарушение уникальности имени категории`,
        };
    }

    return {
        entity,
    };
}
