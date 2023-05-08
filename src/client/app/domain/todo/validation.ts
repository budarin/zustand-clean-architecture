import { isInt } from '../_utils/validation_utils/isInt.ts';
import { exists } from '../_utils/validation_utils/isExists.ts';
import { inRange } from '../_utils/validation_utils/inRange.ts';
import { isString } from '../_utils/validation_utils/isString.ts';
import { isBoolean } from '../_utils/validation_utils/isBoolean.ts';
import { isUndefined } from '../_utils/validation_utils/isUndefined.ts';
import { isTimeStamp } from '../_utils/validation_utils/isTimeStamp.ts';
import { isNotExists } from '../_utils/validation_utils/isNotExists.ts';
import { toDefaultBoolean } from '../_utils/validation_utils/toDefaultBoolean.ts';

import type { TypeConverters } from '../_utils/validation_utils/getEntity.ts';

export const MIN_TODO_LENGTH = 5;
export const MAX_TODO_LENGTH = 100;

export const MIN_DESCRIPTION_LENGTH = 10;
export const MAX_DESCRIPTION_LENGTH = 1000;

// Идентификатор (id) должен быть целочисленного типа.
export const validateId = ({ id: todo_id }: UnknownObject): boolean => exists(todo_id) && isInt(todo_id);

// Поле status_id должно быть целочисленного типа и должно ссылаться на существующий статус в списке Statuses.
export const validateStatusId = ({ status_id }: UnknownObject): boolean => exists(status_id) && isInt(status_id);

// Поле category_id должно быть целочисленного типа и должно ссылаться на существующую категорию в списке Categories,
// либо оно может быть неопределенным.
export const validateCategoryId = ({ category_id }: UnknownObject): boolean =>
    isUndefined(category_id) || isInt(category_id);

// поле due_date должно присутствовать и имет целочисленное значение
export const validateDueDate = ({ due_date }: UnknownObject) => isNotExists(due_date) || isTimeStamp(due_date);

// Поле completed должно быть логическим типом и по умолчанию должно быть установлено в false,
// либо оно может быть неопределенным.
export const validateCompleted = ({ completed }: UnknownObject): boolean => isBoolean(completed);

//  Поле deleted должно быть логическим типом и по умолчанию должно быть установлено в false.
export const validateDeleted = ({ deleted }: UnknownObject): boolean => isUndefined(deleted) || isBoolean(deleted);

// Длина поля todo должна быть не менее 5 символов и не более 150 символов.
export function validateTodo({ todo }: UnknownObject): boolean {
    if (isString(todo)) {
        return inRange(todo.length, MIN_TODO_LENGTH, MAX_TODO_LENGTH);
    }

    return false;
}

// Поле description должно иметь длину не менее 10 символов и не более 1000 символов, либо оно может быть неопределенным.
export function validateDescription({ description }: UnknownObject): boolean {
    if (isUndefined(description)) {
        return true;
    }

    if (isString(description)) {
        return description.length > MIN_DESCRIPTION_LENGTH && description.length <= MAX_DESCRIPTION_LENGTH;
    }

    return false;
}

// значение поля status_id должно присутствовать в списке statuses
export const validateStatusIdRelation = (status_id: number, statusIdsSores: Record<number, any>[]): boolean =>
    !!statusIdsSores.find((idsStore) => Boolean(idsStore[status_id]));

// значение поля category_id должно присутствовать в списке categories либо быть равным undefined
export const validateCategoryIdRelation = (category_id: number, categoryIdsSores: Record<number, any>[]): boolean =>
    !!categoryIdsSores.find((idsStore) => Boolean(idsStore[category_id]));

// coverters
export const todoConverters: TypeConverters = {
    completed: toDefaultBoolean(false),
};

// validation rules
export const todoValidationRules: ValidationRules<Todo> = {
    todo_id: [validateId, 'обязательное поле todo_id должно быть целым числом'],
    status_id: [validateStatusId, 'обязательное поле status_id должно быть целым числом'],
    category_id: [validateCategoryId, 'необязательное поле category_id должно быть целым числом'],
    todo: [
        validateTodo,
        `длина названия todo должна быть более ${MIN_TODO_LENGTH} символов и не превышать ${MAX_TODO_LENGTH} символов`,
    ],
    description: [
        validateDescription,
        `длина description должна быть более ${MIN_DESCRIPTION_LENGTH} символов и не превышать ${MAX_DESCRIPTION_LENGTH} символов`,
    ],
    due_date: [validateDueDate, 'необязательное поле due_date должно быть значением timestamp'],
    completed: [validateCompleted, 'поле completed должно быть boolean'],
    deleted: [validateDeleted, 'поле deleted должно быть boolean'],
};

// Todo getter
export function getTodoFomUnknownObject(input: UnknownObject): Todo {
    return {
        todo_id: input['todo_id'],
        todo: input['todo'],
        status_id: input['status_id'],
        category_id: input['category_id'],
        description: input['description'],
        due_date: input['due_date'],
        deleted: input['deleted'] ?? false,
        completed: input['completed'] ?? false,
    } as Todo;
}
