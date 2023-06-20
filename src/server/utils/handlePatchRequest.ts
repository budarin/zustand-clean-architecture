import { respondWith404 } from './respondWith404.ts';
import { updateTodo } from '../domain/todo/updateTodo.ts';
import { updateCategory } from '../domain/category/updateCategory.ts';

export async function handlePatchRequest(request: Request, method: string): Promise<Response> {
    switch (method) {
        case 'update_category': {
            return updateCategory(request);
        }

        case 'update_todo': {
            return updateTodo(request);
        }

        default: {
            return respondWith404();
        }
    }
}
