import { validateTodoEntity } from '../../entities/todo/index.ts';
import { createValidationError } from '../../entities/validation_utils/createValidationError.ts';

export function validateTodo(
    todo: UnknownObject,
    state: TodosState,
    operation: ClientStateEntityOperations,
): ValidateEntity<Todo> {
    const result = validateTodoEntity(todo);

    if (!result.entity) {
        return result;
    }

    const entity = result.entity as Todo;

    if (operation === 'add' && isTodoIdUnique(state, entity.todo_id)) {
        return createValidationError('Нарушение уникальности идентификатора задач');
    }

    if (operation === 'add' || operation === 'update') {
        if (entity.category_id && !isCategoryExists(state, entity.category_id)) {
            return createValidationError('Категория задачи не обнаружена в стправочнике');
        }

        if (!isStatusExists(state, entity.status_id)) {
            return createValidationError('Статус задачи не обнаружен в стправочнике');
        }
    }

    if (operation === 'delete') {
        if (!isTodoExists(state, entity.todo_id)) {
            return createValidationError('Задача не найдена');
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
function isCategoryExists(state: TodosState, category_id: number) {
    return Object.values(state.categories?.byId).some((category) => category.category_id === category_id);
}

function isTodoIdUnique(state: TodosState, todo_id: number) {
    return !!Object.values(state.todos.byId).find((item) => {
        return item.todo_id === todo_id;
    });
}
