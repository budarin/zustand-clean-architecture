import { validateCategory } from '../../../domain/entities/category';

export function validateCategoryEntity(category: UnknownObject, state: Entities): ValidateEntity<Category> {
    const result = validateCategory(category);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (state.categories?.find((item) => item.category === entity.category)) {
        return {
            error: `Нарушение уникальности имени категории`,
        };
    }

    return {
        entity,
    };
}
