import { logInfo } from './logInfo.ts';
import { respondWith404 } from './respondWith404.ts';
import { createTodo } from '../domain/todo/createTodo.ts';
import { createCategory } from '../domain/category/createCategory.ts';

export async function handlePostRequest(request: Request, method: string): Promise<unknown> {
    switch (method) {
        case 'create_category': {
            return createCategory(request);
        }

        case 'create_todo': {
            return createTodo(request);
        }

        case 'log': {
            return logInfo(request);
        }

        default: {
            return respondWith404();
        }
    }
}
