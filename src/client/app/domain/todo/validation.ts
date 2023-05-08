import { isInt } from '../_utils/validation_utils/isInt.ts';
import { exists } from '../_utils/validation_utils/exists.ts';
import { inRange } from '../_utils/validation_utils/inRange.ts';
import { isString } from '../_utils/validation_utils/isString.ts';
import { isBoolean } from '../_utils/validation_utils/isBoolean.ts';
import { isUndefined } from '../_utils/validation_utils/isUndefined.ts';
import { isTimeStamp } from '../_utils/validation_utils/isTimeStamp.ts';
import { isNotExists } from '../_utils/validation_utils/isNotExists.ts';
import { validateEntity } from '../_utils/validation_utils/validateEntity.ts';
import { toDefaultBoolean } from '../_utils/validation_utils/toDefaultBoolean.ts';

import type { TypeConverters } from '../_utils/validation_utils/getEntity.ts';

export const MIN_TODO_LENGTH = 5;
export const MAX_TODO_LENGTH = 100;

export const MIN_DESCRIPTION_LENGTH = 10;
export const MAX_DESCRIPTION_LENGTH = 1000;

// Идентификатор (id) должен быть целочисленного типа.
export const validate_id = (x: UnknownObject): boolean => exists(x.todo_id) && isInt(x.todo_id);

// Поле status_id должно быть целочисленного типа и должно ссылаться на существующий статус в списке Statuses.
export const validate_status_id = (x: UnknownObject): boolean => exists(x.status_id) && isInt(x.status_id);

// Поле category_id должно быть целочисленного типа и должно ссылаться на существующую категорию в списке Categories,
// либо оно может быть неопределенным.
export const validate_category_id = (x: UnknownObject): boolean => isUndefined(x.category_id) || isInt(x.category_id);

// поле due_date должно присутствовать и имет целочисленное значение
export const validate_dueDate = (x: UnknownObject) => isNotExists(x.due_date) || isTimeStamp(x.due_date);

// Поле completed должно быть логическим типом и по умолчанию должно быть установлено в false,
// либо оно может быть неопределенным.
export const validate_completed = (x: UnknownObject): boolean => isBoolean(x.completed);

//  Поле deleted должно быть логическим типом и по умолчанию должно быть установлено в false.
export const validate_deleted = (x: UnknownObject): boolean => isUndefined(x.deleted) || isBoolean(x.deleted);

// Длина поля todo должна быть не менее 5 символов и не более 150 символов.
export function validate_todo(x: UnknownObject): boolean {
    if (isString(x.todo)) {
        return inRange(x.todo.length, MIN_TODO_LENGTH, MAX_TODO_LENGTH);
    }

    return false;
}

// Поле description должно иметь длину не менее 10 символов и не более 1000 символов, либо оно может быть неопределенным.
export function validateDescription(x: UnknownObject): boolean {
    if (isUndefined(x.description)) {
        return true;
    }

    if (isString(x.description)) {
        return inRange(x.description.length, MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH);
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
const todo_id: ValidationRule = [validate_id, 'обязательное поле todo_id должно быть целым числом'];
const status_id: ValidationRule = [validate_status_id, 'обязательное поле status_id должно быть целым числом'];
const category_id: ValidationRule = [validate_category_id, 'необязательное поле category_id должно быть целым числом'];
const todo: ValidationRule = [
    validate_todo,
    `длина названия todo должна быть более ${MIN_TODO_LENGTH} символов и не превышать ${MAX_TODO_LENGTH} символов`,
];
const description: ValidationRule = [
    validateDescription,
    `длина description должна быть более ${MIN_DESCRIPTION_LENGTH} символов и не превышать ${MAX_DESCRIPTION_LENGTH} символов`,
];
const due_date: ValidationRule = [validate_dueDate, 'необязательное поле due_date должно быть значением timestamp'];
const completed: ValidationRule = [validate_completed, 'поле completed должно быть boolean'];
const deleted: ValidationRule = [validate_deleted, 'поле deleted должно быть boolean'];

export const todoValidationRules: ValidationRules = {
    todo_id,
    status_id,
    category_id,
    todo,
    description,
    due_date,
    completed,
    deleted,
};

export const newTodoValidationRules: ValidationRules = {
    status_id,
    category_id,
    todo,
    description,
    due_date,
    completed,
    deleted,
};

export function validateTodo(todo: Todo) {
    return validateEntity(todo, todoValidationRules, 'Todo');
}
export function validateNewTodo(todo: NewTodo) {
    return validateEntity(todo, newTodoValidationRules, 'Todo');
}

// Todo getter
export function getTodoFomObject(input: UnknownObject): Todo {
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
