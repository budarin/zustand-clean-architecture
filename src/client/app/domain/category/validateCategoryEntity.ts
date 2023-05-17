import { validateCategory } from '../../../../common/domain/category/validation';

export function validateCategoryEntity(category: UnknownObject, state: State): ValidateEntity<Category> {
    const result = validateCategory(category);

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
            error: `Категория с названием ${entity.category} уже существует! Название должно быть уникальным.`,
        };
    }

    return {
        entity,
    };
}
