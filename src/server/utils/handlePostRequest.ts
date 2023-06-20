import { respondWith404 } from './respondWith404.ts';
import { createTodo } from '../domain/todo/createTodo.ts';
import { createCategory } from '../domain/category/createCategory.ts';

export async function handlePostRequest(request: Request, method: string) {
    switch (method) {
        case 'create_category': {
            return createCategory(request);
        }

        case 'create_todo': {
            return createTodo(request);
        }

        case 'log': {
            const data = await request.json();
            const { log } = console;

            switch (data.type) {
                case 'info': {
                    log('%c[INFO]', 'color: blue; font-weight: 600;', data);
                    break;
                }
                case 'warn': {
                    log('%c[WARN]', 'color: #ff9905; font-weight: 600;', data);
                    break;
                }
                case 'error': {
                    log(data);
                    log('%c[ERROR]', 'color: #E56353;; font-weight: 600;', data);
                    break;
                }
                default:
                    break;
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
