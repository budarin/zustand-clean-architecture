import { onResponse } from './onResponse.ts';
import { onCatchError } from './onCatchError.ts';

const jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' };

export async function getTodoStore(): Promise<JsonRpc<Entities, Error>> {
    return fetch('/api/get_todos')
        .then(onResponse<Entities>)
        .catch(onCatchError<Entities>);
}

export async function createCategory(category: NewCategory): Promise<JsonRpc<Category, Error>> {
    return fetch('/api/create_category', {
        method: 'POST',
        body: JSON.stringify(category),
        headers: jsonHeader,
    })
        .then(onResponse<Category>)
        .catch(onCatchError<Category>);
}

export async function updateCategory(category: Category): Promise<JsonRpc<Category, Error>> {
    return fetch('/api/update_category', {
        method: 'PATCH',
        body: JSON.stringify(category),
        headers: jsonHeader,
    })
        .then(onResponse<Category>)
        .catch(onCatchError<Category>);
}

export async function deleteCategory(category: Category): Promise<JsonRpc<Category, Error>> {
    return fetch('/api/delete_category', {
        method: 'DELETE',
        body: JSON.stringify(category),
        headers: jsonHeader,
    })
        .then(onResponse<Category>)
        .catch(onCatchError<Category>);
}

export async function createTodo(todo: Todo): Promise<JsonRpc<Todo, Error>> {
    return fetch('/api/create_todo', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    })
        .then(onResponse<Todo>)
        .catch(onCatchError<Todo>);
}

export async function updateTodo(todo: Todo): Promise<JsonRpc<Todo, Error>> {
    return fetch('/api/update_todo', {
        method: 'PATCH',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    })
        .then(onResponse<Todo>)
        .catch(onCatchError<Todo>);
}

export async function deleteTodo(todo: Todo): Promise<JsonRpc<Todo, Error>> {
    return fetch('/api/delete_todo', {
        method: 'DELETE',
        body: JSON.stringify(todo),
        headers: jsonHeader,
    })
        .then(onResponse<Todo>)
        .catch(onCatchError<Todo>);
}

export function log(data: UnknownObject): void {
    fetch('/api/log', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: jsonHeader,
    }).catch((error) => {
        const { error: logError } = console;
        logError('API error:', error, data);

        return {
            error,
        };
    });
}
