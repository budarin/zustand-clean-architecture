import { isInt } from '../_utils/validation_utils/isInt.ts';
import { inRange } from '../_utils/validation_utils/inRange.ts';
import { isString } from '../_utils/validation_utils/isString.ts';

import { checkEntity } from '../_utils/validation_utils/validateEntity.ts';

const MIN_ICON_NAME_LENGTH = 5;
const MAX_ICON_NAME_LENGTH = 20;

// Идентификатор (id) должен быть целочисленного типа.
export const validateId = ({ icon_id }: UnknownObject): boolean => isInt(icon_id);

// Длина поля name должна быть не менее 5 символов и не более 50 символов.
export function validateName({ icon_name }: UnknownObject): boolean {
    if (isString(icon_name)) {
        return inRange(icon_name.length, MIN_ICON_NAME_LENGTH, MAX_ICON_NAME_LENGTH);
    }

    return false;
}

// validation rules
export const iconValidationRules: ValidationRules<Todo> = {
    icon_id: [validateId, 'обязательное поле icon_id должно быть целочисленным числом'],
    name: [validateName, 'обязательное icon_name должно быть строкой'],
};

// Category getter
export function getIconFomUnknownObject(input: UnknownObject): Icon {
    return {
        icon_id: input['icon_id'],
        icon_name: input['name'],
    } as Icon;
}

export function validateIcon(icon: Icon) {
    return checkEntity<Icon>(icon, iconValidationRules, 'Icon');
}
