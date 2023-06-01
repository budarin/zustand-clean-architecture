const jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' };

const { log: clog } = console;

export async function getTodoStore(): Promise<Entities> {
    clog('getTodoStore - start fetching');
    return fetch('/api/get_todos')
        .then((resp) => {
            return resp.json();
        })
        .then((result) => {
            clog('getTodoStore - fetched', result);
            return result;
        });
}

export async function createCategory(category: Category): Promise<Category> {
    return fetch('/api/create_category', {
        method: 'POST',
        body: JSON.stringify(category),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function updateCategory(category: Category): Promise<Category> {
    return fetch('/api/update_category', {
        method: 'PATCH',
        body: JSON.stringify(category),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function deleteCategory(category: Category): Promise<Category> {
    return fetch('/api/delete_category', {
        method: 'DELETE',
        body: JSON.stringify(category),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function createTodo(todo: Todo): Promise<Todo> {
    return fetch('/api/create_todo', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function updateTodo(todo: Todo): Promise<Todo> {
    return fetch('/api/update_todo', {
        method: 'PATCH',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export async function deleteTodo(todo: Todo): Promise<Todo> {
    return fetch('/api/delete_todo', {
        method: 'DELETE',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    }).then((resp) => {
        return resp.json();
    });
}

export function log(data: UnknownObject): void {
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
    getTodoStore: typeof getTodoStore;
    createCategory: typeof createCategory;
    updateCategory: typeof updateCategory;
    deleteCategory: typeof deleteCategory;
    createTodo: typeof createTodo;
    updateTodo: typeof updateTodo;
    deleteTodo: typeof deleteTodo;
    log: typeof log;
};
