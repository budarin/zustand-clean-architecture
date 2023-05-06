export function updateICategoryCounters(todo: Todo, state: TodoState) {
    // обновляем todos.idsByCategoryId

    if (todo.category_id && !todo.deleted) {
        const byId = state.idsByCategoryId;

        // если есть такая категория
        if (byId[todo.category_id]) {
            // вставляем todo.id
            if (byId[todo.category_id].indexOf(todo.id) === -1) {
                state.idsByCategoryId[todo.category_id] = [...byId[todo.category_id], todo.id];
            }
        } else {
            // создаем и вставляем todo.id
            state.idsByCategoryId[todo.category_id] = [todo.id];
        }

        // проходимся по остальным категориям и если там есть todo.id - удаляем его
        Object.keys(state.idsByCategoryId).forEach((categoryId) => {
            const id = Number(categoryId);

            if (id !== todo.category_id) {
                const ids = state.idsByCategoryId;
                const idx = ids[id].indexOf(todo.id);

                if (idx > -1) {
                    ids[id] = [...ids[id]];
                    ids[id].splice(idx, 1);
                }
            }
        });
    } else {
        // проходимся по всем категориям и удаляем его
        Object.keys(state.idsByCategoryId).forEach((categoryId) => {
            const id = Number(categoryId);
            const ids = state.idsByCategoryId;
            const idx = ids[id].indexOf(todo.id);

            if (idx > -1) {
                ids[id] = [...ids[id]];
                ids[id].splice(idx, 1);
            }
        });
    }
}
