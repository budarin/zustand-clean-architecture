export function updateIdsByCategoryId(state: TodoState, newTodo: Todo, oldTodo?: Todo) {
    // если обновление задачи и категория не изменилась - выходим
    if (oldTodo && oldTodo.category_id === newTodo.category_id) {
        return;
    }

    const byId = state.idsByCategoryId;

    // если обновление задачи и
    // - категория изменилась
    // - или задача удалена
    // - или у задачи удалена категория
    // удаляем задачу из старой категории
    if (oldTodo && oldTodo.category_id) {
        if (oldTodo.category_id !== newTodo.category_id || newTodo.deleted || newTodo.category_id === undefined) {
            const newCategory = [...byId[oldTodo.category_id]];
            newCategory.splice(newCategory.indexOf(oldTodo.category_id));
            byId[oldTodo.category_id] = newCategory;
        }
    }

    // добавляем задачу в категорию
    if (newTodo.category_id) {
        // если есть такая категория
        if (byId[newTodo.category_id]) {
            // и задачи в ней нет - вставляем todo.id
            if (byId[newTodo.category_id].indexOf(newTodo.todo_id) === -1) {
                byId[newTodo.category_id] = [...byId[newTodo.category_id], newTodo.todo_id];
            }
        } else {
            // создаем и вставляем todo.id
            byId[newTodo.category_id] = [newTodo.todo_id];
        }
    }
}
