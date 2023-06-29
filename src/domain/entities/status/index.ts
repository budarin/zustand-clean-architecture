import { isInt } from '../validation_utils/isInt.ts';
import { exists } from '../validation_utils/exists.ts';
import { inRange } from '../validation_utils/inRange.ts';
import { isString } from '../validation_utils/isString.ts';
import { validateRawEntity } from '../validation_utils/validateEntity.ts';

const MIN_STATUS_LENGTH = 3;
const MAX_STATUS_LENGTH = 20;

// Идентификатор (id) должен быть целочисленного типа.
export const validate_id = (x: UnknownObject): boolean => exists(x.status_id) && isInt(x.status_id);

// Длина поля color должна быть 7 символов и первый символ должен быть #.
export const validate_color = (x: UnknownObject): boolean =>
    isString(x.color) && x.color.length === 7 && x.color[0] === '#';

// Длина поля status должна быть не менее 3 символов и не более 20 символов.
export function validate_status(x: UnknownObject): boolean {
    if (isString(x.status)) {
        return inRange(x.status.length, MIN_STATUS_LENGTH, MAX_STATUS_LENGTH);
    }

    return false;
}

export function getStatusFomObject(input: UnknownObject = {}): Status {
    const { status_id, status, color } = input as Status;

    return {
        status_id,
        status,
        color,
    };
}

const statusValidationRules: ValidationRules = {
    status_id: [validate_id, 'обязательное поле status_id должно быть целочисленным числом'],
    status: [
        validate_status,
        `Длина названия статуса должна быть более ${MIN_STATUS_LENGTH} символов и не превышать ${MAX_STATUS_LENGTH} символов`,
    ],
    color: [validate_color, 'обязательное поле color должно быть строкой из 7 символов'],
};

export function validateStatusEntity(status: UnknownObject): ValidateEntity<Status> {
    return validateRawEntity<Status>(getStatusFomObject(status), statusValidationRules);
}
