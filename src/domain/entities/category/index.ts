import { isInt } from '../validation_utils/isInt.ts';
import { exists } from '../validation_utils/exists.ts';
import { inRange } from '../validation_utils/inRange.ts';
import { isString } from '../validation_utils/isString.ts';
import { validateRawEntity } from '../validation_utils/validateEntity.ts';

export const MIN_CATEGOTY_LENGTH = 3;
export const MAX_CATEGOTY_LENGTH = 20;

//  Идентификатор (id) должен быть целочисленного типа.
export const validate_id = (x: UnknownObject): boolean => exists(x.category_id) && isInt(x.category_id);

// Поле icon_id должно быть целочисленного типа и должно ссылаться на существующую иконку в списке Icons.
export const validate_icon_id = (x: UnknownObject): boolean => exists(x.icon_id) && isInt(x.icon_id) && x.icon_id > 0;

// Обязательно должно присутствовать поле category, и его длина должна быть более 3-х символов и не должна превышать 15 символов.
export function validate_category(x: UnknownObject): boolean {
    if (isString(x.category)) {
        return inRange(x.category.length, MIN_CATEGOTY_LENGTH, MAX_CATEGOTY_LENGTH);
    }

    return false;
}

// validation rules
const category_id: ValidationRule = [validate_id, 'Category обязан иметь category_id целым числом'];
const category: ValidationRule = [
    validate_category,
    `Длина названия категории должна быть более ${MIN_CATEGOTY_LENGTH} символов и не превышать ${MAX_CATEGOTY_LENGTH} символов`,
];
const icon_id: ValidationRule = [validate_icon_id, 'Category обязан иметь icon_id целым числом'];

export function getCategoryFomObject(input: UnknownObject = {}): NewCategory | NewCategory | UnknownObject {
    const { category_id, category, icon_id } = input;

    return {
        category_id,
        category,
        icon_id,
    };
}

const categoryValidationRules: ValidationRules = {
    category_id,
    category,
    icon_id,
};

export function validateCategoryEntity(category: UnknownObject): ValidateEntity<NewCategory> {
    return validateRawEntity<NewCategory>(getCategoryFomObject(category), categoryValidationRules);
}

const newCategoryValidationRules: ValidationRules = {
    category,
    icon_id,
};
export function validateNewCategoryEntity(category: UnknownObject): ValidateEntity<NewCategory> {
    return validateRawEntity<NewCategory>(getCategoryFomObject(category), newCategoryValidationRules);
}
