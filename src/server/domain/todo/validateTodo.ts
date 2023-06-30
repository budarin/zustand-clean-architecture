import { validateNewTodoEntity, validateTodoEntity } from '../../../domain/entities/todo';
import { createValidationError } from '../../../domain/entities/validation_utils/createValidationError';

export function validateTodo(todo: UnknownObject, state: Entities, operation: 'create'): ValidateEntity<NewTodo>;

export function validateTodo(
    todo: UnknownObject,
    state: Entities,
    operation: Exclude<ServerStateEntityOperations, 'create'>,
): ValidateEntity<Todo>;

export function validateTodo(
    todo: UnknownObject,
    state: Entities,
    operation: ServerStateEntityOperations,
): ValidateEntity<NewTodo | Todo> {
    let result: ValidateEntity<NewTodo | Todo>;

    if (operation === 'create') {
        result = validateNewTodoEntity(todo) as ValidateEntity<NewTodo>;
    } else {
        result = validateTodoEntity(todo) as ValidateEntity<Todo>;
    }

    if (!result.entity) {
        return result;
    }

    const entity = result.entity as Todo;

    if (operation === 'create' || operation === 'update') {
        if (isStatusExists(state, entity.status_id) === false) {
            return createValidationError('Статус задачи не обнаружен в стправочнике!');
        }

        if ((entity.category_id && !state.categories) || !isCategoryExists(state, entity.category_id)) {
            return createValidationError('Категория задачи не обнаружена в стправочнике!');
        }
    }

    if (operation === 'delete') {
        if (!isTodoExists(state, entity.todo_id)) {
            return createValidationError('Задача не найдена!');
        }
    }

    return {
        entity,
    };
}

function isStatusExists(state: Entities, status_id: number) {
    return state.statuses.some((status) => status.status_id === status_id);
}
function isTodoExists(state: Entities, todo_id: number) {
    return state.todos.some((todo) => todo.todo_id === todo_id);
}
function isCategoryExists(state: Entities, category_id: number | undefined) {
    return state.categories?.some((category) => category.category_id === category_id);
}
