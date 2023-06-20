import { respondWith404 } from './respondWith404.ts';
import { deleteTodo } from '../domain/todo/deleteTodo.ts';
import { deleteCategory } from '../domain/category/deleteCategory.ts';

export async function handleDeleteRequest(request: Request, method: string): Promise<Response> {
    switch (method) {
        case 'delete_category': {
            return deleteCategory(request);
        }

        case 'delete_todo': {
            return deleteTodo(request);
        }

        default: {
            return respondWith404();
        }
    }
}
