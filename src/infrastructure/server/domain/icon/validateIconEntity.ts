import { validateIcon } from '../../../../domain/entities/icon/validation';

export function validateIconEntity(icon: UnknownObject, state: TodosState): ValidateEntity<Icon> {
    const result = validateIcon(icon);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (state.icons.ids.includes(entity.icon_id) === true) {
        return {
            error: `Нарушение уникальности ключа icons.icon_id!`,
        };
    }

    if (Object.values(state.icons.byId).find((item) => item.icon_name === entity.icon_name)) {
        return {
            error: `Нарушение уникальности имени иконки в  icons!`,
        };
    }

    return {
        entity,
    };
}
