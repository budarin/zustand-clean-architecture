import { validateTodo } from '../../../domain/entities/todo';

export function validateTodoEntity(todo: UnknownObject, state: Entities): ValidateEntity<Todo> {
    const result = validateTodo(todo);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (state.statuses.some((status) => status.status_id === entity.status_id) === false) {
        return {
            error: 'Статус задачи не обнаружен в стправочнике!!',
        };
    }

    if (
        (entity.category_id && !state.categories) ||
        state.categories?.some((category) => entity.category_id === category.category_id) === false
    ) {
        return {
            error: 'Категория задачи не обнаружена в стправочнике!!',
        };
    }

    return {
        entity,
    };
}
