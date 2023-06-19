import * as API from '../contracts/API/index.ts';

interface API {
    getTodoStore(): Promise<Entities>;
    createCategory(category: Category): Promise<Category>;
    updateCategory(category: Category): Promise<Category>;
    deleteCategory(category: Category): Promise<Category>;
    createTodo(todo: Todo): Promise<Todo>;
    updateTodo(todo: Todo): Promise<Todo>;
    deleteTodo(todo: Todo): Promise<Todo>;
    log(data: UnknownObject): void;
}

export function useApi(): API {
    return API;
}