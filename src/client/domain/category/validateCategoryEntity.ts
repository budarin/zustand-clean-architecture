import { validateCategory } from '../../../common/domain/category/validation';

export function validateCategoryEntity(icon: UnknownObject, state: State): ValidateEntity<Category> {
    const result = validateCategory(icon);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (state.icons.ids.includes(entity.icon_id) === false) {
        return {
            error: 'Идентификатор иконки отсутствует в справочнике!',
        };
    }

    if (
        Object.values(state.categories.byId).find(
            (item) => item.category === entity.category && item.category_id !== entity.category_id,
        )
    ) {
        return {
            error: `Нарушение уникальности имени категории`,
        };
    }

    return {
        entity,
    };
}
