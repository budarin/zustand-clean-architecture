import { validateNewTodo, validateTodo } from '../../../domain/entities/todo';

export function validateTodoEntity(todo: UnknownObject, state: Entities, operation: 'create'): ValidateEntity<NewTodo>;

export function validateTodoEntity(
    todo: UnknownObject,
    state: Entities,
    operation: Exclude<StateEntityOperations, 'create'>,
): ValidateEntity<Todo>;

export function validateTodoEntity(
    todo: UnknownObject,
    state: Entities,
    operation: StateEntityOperations,
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

    if (operation === 'add' || operation === 'create' || operation === 'update') {
        if (state.statuses.some((status) => status.status_id === entity.status_id) === false) {
            return {
                error: 'Статус задачи не обнаружен в стправочнике!',
            };
        }

        if (
            (entity.category_id && !state.categories) ||
            state.categories?.some((category) => entity.category_id === category.category_id) === false
        ) {
            return {
                error: 'Категория задачи не обнаружена в стправочнике!',
            };
        }
    }

    if (operation === 'add' && state.todos.find((item) => item.todo_id === entity.todo_id)) {
        return {
            error: 'Нарушение уникальности идентификатора задач',
        };
    }

    if (operation === 'delete') {
        if (state.todos.some((todo) => todo.todo_id === entity.todo_id) === false) {
            return {
                error: 'Задача не найдена!',
            };
        }
    }

    return {
        entity,
    };
}
