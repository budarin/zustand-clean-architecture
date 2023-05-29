const jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' };

export async function getTodoStore() {
    return fetch('/api/get_todos').then((resp) => {
        return resp.json();
    });
}

export async function createCategory(category: Category) {
    return fetch('/api/create_category', {
        method: 'POST',
        body: JSON.stringify(category),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function updateCategory(category: Category) {
    return fetch('/api/update_category', {
        method: 'PATCH',
        body: JSON.stringify(category),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function deleteCategory(category: Category) {
    return fetch('/api/delete_category', {
        method: 'DELETE',
        body: JSON.stringify(category),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function createTodo(todo: Todo) {
    return fetch('/api/create_todo', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function updateTodo(todo: Todo) {
    return fetch('/api/update_todo', {
        method: 'PATCH',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function deleteTodo(todo: Todo) {
    return fetch('/api/delete_todo', {
        method: 'DELETE',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export function log(data: UnknownObject) {
    fetch('/api/log', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: jsonHeader,
    }).catch((error) => {
        console.log('API error:', error, data);

        return {
            error: jsonHeader,
        };
    });
}

export type API = {
    GetTodoStore: typeof getTodoStore;
    CreateCategory: typeof createCategory;
    UpdateCategory: typeof updateCategory;
    DeleteCategory: typeof deleteCategory;
    CreateTodo: typeof createTodo;
    UpdateTodo: typeof updateTodo;
    DeleteTodo: typeof deleteTodo;
    Log: typeof log;
};
