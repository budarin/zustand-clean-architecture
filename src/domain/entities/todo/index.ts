import { isInt } from '../validation_utils/isInt.ts';
import { exists } from '../validation_utils/exists.ts';
import { inRange } from '../validation_utils/inRange.ts';
import { isString } from '../validation_utils/isString.ts';
import { isBoolean } from '../validation_utils/isBoolean.ts';
import { isUndefined } from '../validation_utils/isUndefined.ts';
import { isNotExists } from '../validation_utils/isNotExists.ts';
import { validateRawEntity } from '../validation_utils/validateEntity.ts';
import { toDefaultBoolean } from '../validation_utils/toDefaultBoolean.ts';
import { capitalizeFirstLetter } from '../../../utils/string/capitalizeFirstLetter.ts';

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
export const validate_dueDate = (x: UnknownObject) => isNotExists(x.due_date) || isString(x.due_date);

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
const todoBeFalse = toDefaultBoolean(false);

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
const due_date: ValidationRule = [validate_dueDate, 'необязательное поле due_date должно быть строкой ISO 8086'];
const completed: ValidationRule = [validate_completed, 'поле completed должно быть boolean'];
const deleted: ValidationRule = [validate_deleted, 'поле deleted должно быть boolean'];

export function getTodoFomObject(input: UnknownObject): Todo | NewTodo | {} {
    const { todo_id, todo, status_id, category_id, description, due_date, deleted, completed } = input;

    return {
        todo_id,
        todo: capitalizeFirstLetter(todo),
        status_id,
        category_id,
        description,
        due_date,
        deleted: todoBeFalse(deleted),
        completed: todoBeFalse(completed),
    };
}

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

export function validateTodoEntity(todo: UnknownObject): ValidateEntity<Todo> {
    return validateRawEntity<Todo>(getTodoFomObject(todo), todoValidationRules);
}

export const newTodoValidationRules: ValidationRules = {
    status_id,
    category_id,
    todo,
    description,
    due_date,
    completed,
    deleted,
};
export function validateNewTodoEntity(todo: UnknownObject): ValidateEntity<NewTodo> {
    return validateRawEntity<NewTodo>(getTodoFomObject(todo), newTodoValidationRules);
}
