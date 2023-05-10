import { getIconFomObject, validateIcon } from '../../../../common/domain/icon/validation';

export function validateIconEntity(icon: Icon, state: State): ValidateEntity<Icon> {
    const result = validateIcon(icon);

    if (result.error) {
        return result;
    }

    if (state.icons.ids.includes(icon.icon_id) === true) {
        return {
            error: `Нарушение уникальности ключа icons.icon_id!`,
        };
    }

    if (Object.values(state.icons.byId).find((item) => item.icon_name == icon.icon_name)) {
        return {
            error: `Нарушение уникальности имени иконки в  icons!`,
        };
    }

    return {
        entity: getIconFomObject(result.entity),
    };
}
