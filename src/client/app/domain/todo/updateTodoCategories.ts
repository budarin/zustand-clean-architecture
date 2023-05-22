import { isNotExists } from '../../../../common/validation_utils/isNotExists';

export function updateTodoCategories(state: TodoState, newTodo: Todo, oldTodo?: Todo) {
    // если обновление задачи и категория не изменилась - выходим
    if (oldTodo && oldTodo.category_id === newTodo.category_id) {
        return;
    }

    const byCategoryId = state.idsByCategoryId;

    // если задача обновлена и
    // - изменилась категория
    // - или задача удалена
    // - или у задачи удалена категория
    // удаляем задачу из категории в которой она была
    if (oldTodo && oldTodo.category_id) {
        if (oldTodo.category_id !== newTodo.category_id || newTodo.deleted || isNotExists(newTodo.category_id)) {
            const newCategory = [...byCategoryId[oldTodo.category_id]];
            newCategory.splice(newCategory.indexOf(oldTodo.category_id));
            byCategoryId[oldTodo.category_id] = newCategory;
        }
    }

    // - новая задача
    // - у задачи обновлена категория
    // добавляем задачу в категорию
    if (newTodo.category_id) {
        // если есть такая категория
        if (byCategoryId[newTodo.category_id]) {
            // и задачи в ней нет - вставляем todo.id
            if (byCategoryId[newTodo.category_id].indexOf(newTodo.todo_id) === -1) {
                byCategoryId[newTodo.category_id] = [...byCategoryId[newTodo.category_id], newTodo.todo_id];
            }
        } else {
            // создаем и вставляем todo.id
            byCategoryId[newTodo.category_id] = [newTodo.todo_id];
        }
    }
}
