import { isInt } from '../../utils/validation/isInt.ts';
import { exists } from '../../utils/validation/exists.ts';
import { inRange } from '../../utils/validation/inRange.ts';
import { isString } from '../../utils/validation/isString.ts';

import { validateRawEntity } from '../../utils/validation/validateEntity.ts';

const MIN_ICON_NAME_LENGTH = 5;
const MAX_ICON_NAME_LENGTH = 20;

// Идентификатор (id) должен быть целочисленного типа.
export const validate_id = (x: UnknownObject): boolean => exists(x.icon_id) && isInt(x.icon_id);

// Длина поля name должна быть не менее 5 символов и не более 50 символов.
export function validate_name(x: UnknownObject): boolean {
    if (isString(x.icon_name)) {
        return inRange(x.icon_name.length, MIN_ICON_NAME_LENGTH, MAX_ICON_NAME_LENGTH);
    }

    return false;
}

// validation rules
export const iconValidationRules: ValidationRules = {
    icon_id: [validate_id, 'обязательное поле icon_id должно быть целочисленным числом'],
    name: [validate_name, 'обязательное icon_name должно быть строкой'],
};

export function validateIcon(icon: UnknownObject): ValidateEntity<Icon> {
    return validateRawEntity<Icon>(getIconFomObject(icon), iconValidationRules);
}

// Category getter
export function getIconFomObject(input: UnknownObject = {}): Icon {
    const { icon_id, icon_name } = input as Icon;

    return {
        icon_id,
        icon_name,
    };
}

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

    if (
        Object.values(state.icons.byId).find(
            (item) => item.icon_name === entity.icon_name && item.icon_id !== entity.icon_id,
        )
    ) {
        return {
            error: `Нарушение уникальности имени иконки в  icons!`,
        };
    }

    return {
        entity,
    };
}
