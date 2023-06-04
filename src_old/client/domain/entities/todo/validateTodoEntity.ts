import { validateTodo } from '../../../../common/domain/todo/validation';

export function validateTodoEntity(todo: UnknownObject, state: TodosState): ValidateEntity<Todo> {
    const result = validateTodo(todo);

    if (!result.entity) {
        return result;
    }

    const { entity } = result;

    if (state.statuses.ids.includes(entity.status_id) === false) {
        return {
            error: 'Статус задачи не обнаружен в стправочнике!!',
        };
    }

    if (entity.category_id && state.categories.ids.includes(entity.category_id) === false) {
        return {
            error: 'Категория задачи не обнаружена в стправочнике!!',
        };
    }

    return {
        entity,
    };
}
