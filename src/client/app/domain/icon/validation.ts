import { isInt } from '../_utils/validation_utils/isInt.ts';
import { exists } from '../_utils/validation_utils/exists.ts';
import { inRange } from '../_utils/validation_utils/inRange.ts';
import { isString } from '../_utils/validation_utils/isString.ts';

import { validateEntity } from '../_utils/validation_utils/validateEntity.ts';

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

export function validateIcon(icon: Icon) {
    return validateEntity(icon, iconValidationRules, 'Icon');
}

// Category getter
export function getIconFomObject(input: UnknownObject): Icon {
    return {
        icon_id: input['icon_id'],
        icon_name: input['name'],
    } as Icon;
}
