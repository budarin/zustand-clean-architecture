import { validateNewTodo, validateTodo } from '../../../domain/entities/todo';

export function validateTodoEntity(todo: UnknownObject, state: Entities, operation: 'create'): ValidateEntity<NewTodo>;

export function validateTodoEntity(
    todo: UnknownObject,
    state: Entities,
    operation: Exclude<ServerStateEntityOperations, 'create'>,
): ValidateEntity<Todo>;

export function validateTodoEntity(
    todo: UnknownObject,
    state: Entities,
    operation: ServerStateEntityOperations,
): ValidateEntity<NewTodo | Todo> {
    let result: ValidateEntity<NewTodo | Todo>;

    if (operation === 'create') {
        result = validateNewTodo(todo) as ValidateEntity<NewTodo>;
    } else {
        result = validateTodo(todo) as ValidateEntity<Todo>;
    }

    if (!result.entity) {
        return result;
    }

    const entity = result.entity as Todo;

    if (operation === 'create' || operation === 'update') {
        if (isStatusExists(state, entity.status_id) === false) {
            return {
                error: 'Статус задачи не обнаружен в стправочнике!',
            };
        }

        if ((entity.category_id && !state.categories) || !isCategoryExists(state, entity.category_id)) {
            return {
                error: 'Категория задачи не обнаружена в стправочнике!',
            };
        }
    }

    if (operation === 'delete') {
        if (!isTodoExists(state, entity.todo_id)) {
            return {
                error: 'Задача не найдена!',
            };
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

function isTodoIdUnique(state: Entities, todo_id: number) {
    return state.todos.find((item) => item.todo_id === todo_id);
}
