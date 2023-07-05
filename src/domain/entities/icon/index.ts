import { isInt } from '../validation_utils/isInt.ts';
import { exists } from '../validation_utils/exists.ts';
import { inRange } from '../validation_utils/inRange.ts';
import { isString } from '../validation_utils/isString.ts';

import { validateRawEntity } from '../validation_utils/validateEntity.ts';

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

export function getIconFomObject(input: UnknownObject = {}): Icon | UnknownObject {
    const { icon_id, icon_name } = input;

    return {
        icon_id,
        icon_name,
    };
}

const iconValidationRules: ValidationRules = {
    icon_id: [validate_id, 'Обязательное поле icon_id должно быть целочисленным числом'],
    name: [validate_name, 'Длина поля name должна быть не менее 5 символов и не более 20 символов'],
};

export function validateIconEntity(icon: UnknownObject): ValidateEntity<Icon> {
    return validateRawEntity<Icon>(getIconFomObject(icon), iconValidationRules);
}
