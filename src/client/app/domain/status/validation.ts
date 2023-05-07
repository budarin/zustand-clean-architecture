import { isInt } from '../_utils/validation_utils/isInt.ts';
import { inRange } from '../_utils/validation_utils/inRange.ts';
import { isString } from '../_utils/validation_utils/isString.ts';

import type { ValidationRules } from '../_utils/validation_utils/validateFormEntity.ts';

const MIN_STATUS_LENGTH = 3;
const MAX_STATUS_LENGTH = 20;

// Идентификатор (id) должен быть целочисленного типа.
export const validateId = ({ id: status_id }: UnknownObject): boolean => isInt(status_id);

// Длина поля color должна быть 7 символов и первый символ должен быть #.
export const validateColor = ({ color }: UnknownObject): boolean =>
    isString(color) && color.length === 7 && color[0] === '#';

// Длина поля status должна быть не менее 3 символов и не более 20 символов.
export function validateStatus({ status }: UnknownObject): boolean {
    if (isString(status)) {
        return inRange(status.length, MIN_STATUS_LENGTH, MAX_STATUS_LENGTH);
    }

    return false;
}

// validation rules
export const statusValidationRules: ValidationRules<Todo> = {
    status_id: [validateId, 'обязательное поле status_id должно быть целочисленным числом'],
    status: [
        validateStatus,
        `Длина названия статуса должна быть более ${MIN_STATUS_LENGTH} символов и не превышать ${MAX_STATUS_LENGTH} символов`,
    ],
    color: [validateColor, 'обязательное поле color должно быть строкой из 7 символов'],
};

// Category getter
export function getStatusFomUnknownObject(input: UnknownObject): Status {
    return {
        status_id: input['status_id'],
        status: input['status'],
        color: input['color'],
    } as Status;
}
