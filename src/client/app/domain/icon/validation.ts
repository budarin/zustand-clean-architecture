import { isInt } from '../_utils/validation_utils/isInt.ts';
import { inRange } from '../_utils/validation_utils/inRange.ts';
import { isString } from '../_utils/validation_utils/isString.ts';

import type { ValidationRules } from '../_utils/validation_utils/validateEntity.ts';

const MIN_ICON_NAME_LENGTH = 5;
const MAX_ICON_NAME_LENGTH = 20;

// Идентификатор (id) должен быть целочисленного типа.
export const validateId = ({ id: icon_id }: UnknownObject): boolean => isInt(icon_id);

// Длина поля name должна быть не менее 5 символов и не более 50 символов.
export function validateName({ name }: UnknownObject): boolean {
    if (isString(name)) {
        return inRange(name.length, MIN_ICON_NAME_LENGTH, MAX_ICON_NAME_LENGTH);
    }

    return false;
}

// validation rules
export const iconValidationRules: ValidationRules<Todo> = {
    icon_id: [validateId, 'обязательное поле icon_id должно быть целочисленным числом'],
    name: [validateName, 'обязательное name name должно быть строкой'],
};

// Category getter
export function getIconFomUnknownObject(input: UnknownObject): Icon {
    return {
        icon_id: input['icon_id'],
        name: input['name'],
    } as Icon;
}
