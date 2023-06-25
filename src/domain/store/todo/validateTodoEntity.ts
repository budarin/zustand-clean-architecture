import { validateNewTodo, validateTodo } from '../../../domain/entities/todo';

export function validateTodoEntity(
    todo: UnknownObject,
    state: TodosState,
    operation: 'create',
): ValidateEntity<NewTodo>;

export function validateTodoEntity(
    todo: UnknownObject,
    state: TodosState,
    operation: Exclude<ClientStateEntityOperations, 'create'>,
): ValidateEntity<Todo>;

export function validateTodoEntity(
    todo: UnknownObject,
    state: TodosState,
    operation: ClientStateEntityOperations,
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
        if (!isStatusExists(state, entity.status_id)) {
            return {
                error: 'Статус задачи не обнаружен в стправочнике!',
            };
        }

        if (
            (entity.category_id && !state.categories) ||
            (entity.category_id && state.categories && !isCategoryExists(state, entity.category_id))
        ) {
            return {
                error: 'Категория задачи не обнаружена в стправочнике!',
            };
        }
    }

    if (operation === 'add' && isTodoIdUnique(state, entity.todo_id)) {
        return {
            error: 'Нарушение уникальности идентификатора задач',
        };
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

function isStatusExists(state: TodosState, status_id: number) {
    return Object.values(state.statuses.byId).some((status) => status.status_id === status_id);
}
function isTodoExists(state: TodosState, todo_id: number) {
    return Object.values(state.todos.byId).some((todo) => todo.todo_id === todo_id);
}
function isCategoryExists(state: TodosState, category_id: number | undefined) {
    if (category_id === undefined) {
        return true;
    }
    return Object.values(state.categories?.byId).some((category) => category.category_id === category_id);
}

function isTodoIdUnique(state: TodosState, todo_id: number) {
    return !!Object.values(state.todos.byId).find((item) => {
        return item.todo_id === todo_id;
    });
}
