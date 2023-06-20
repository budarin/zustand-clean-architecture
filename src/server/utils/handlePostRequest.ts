import { respondWith404 } from './respondWith404.ts';
import { createTodo } from '../domain/todo/createTodo.ts';
import { createCategory } from '../domain/category/createCategory.ts';
import { logger, loggerMethods } from '../services/logger.ts';

export async function handlePostRequest(request: Request, method: string) {
    switch (method) {
        case 'create_category': {
            return createCategory(request);
        }

        case 'create_todo': {
            return createTodo(request);
        }

        case 'log': {
            const { type, ...rest } = await request.json();

            if (loggerMethods.includes(type)) {
                logger[type as keyof typeof logger](rest);
            } else {
                logger['info'](rest);
            }

            const response = new Response(null, {
                status: 200,
            });

            return response;
        }

        default: {
            return respondWith404();
        }
    }
}
