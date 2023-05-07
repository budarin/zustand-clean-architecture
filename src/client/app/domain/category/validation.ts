import { isInt } from '../_utils/validation_utils/isInt.ts';
import { inRange } from '../_utils/validation_utils/inRange.ts';
import { isString } from '../_utils/validation_utils/isString.ts';

import type { ValidationRules } from '../_utils/validation_utils/validateEntity.ts';

export const MIN_CATEGOTY_LENGTH = 3;
export const MAX_CATEGOTY_LENGTH = 15;

//  Идентификатор (id) должен быть целочисленного типа.
export const validateId = ({ id }: UnknownObject): boolean => isInt(id);

// Поле icon_id должно быть целочисленного типа и должно ссылаться на существующую иконку в списке Icons.
export const validateIconId = ({ icon_id }: UnknownObject): boolean => isInt(icon_id);

// Обязательно должно присутствовать поле category, и его длина должна быть более 3-х символов и не должна превышать 15 символов.
export function validateCategory({ category }: UnknownObject): boolean {
    if (isString(category)) {
        return inRange(category.length, MIN_CATEGOTY_LENGTH, MAX_CATEGOTY_LENGTH);
    }

    return false;
}

// значение поля icon_id должно быть в спике icons
export const validateIconIdRelation = (icon_id: CategoryIconId, iconIdsSores: Record<Id, any>[]): boolean =>
    !!iconIdsSores.find((idsStore) => Boolean(idsStore[icon_id]));

// validation rules
export const categoryValidationRules: ValidationRules<Todo> = {
    id: [validateId, 'Category обязан иметь id целым числомr'],
    category: [
        validateCategory,
        `Длина названия категории должна быть более ${MIN_CATEGOTY_LENGTH} символов и не превышать ${MAX_CATEGOTY_LENGTH} символов`,
    ],
    icon_id: [validateIconId, 'Category обязан иметь icon_id целым числом'],
};

// Category getter
export function getCategoryFomUnknownObject(input: UnknownObject): Category {
    return {
        category_id: input['id'],
        category: input['category'],
        icon_id: input['icon_id'],
    } as Category;
}
