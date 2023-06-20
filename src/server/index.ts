import { state } from './domain/state.ts';
import { loadState } from './utils/loadState.ts';
import { apiPattern, jsonHeader } from './utils/consts';
import { createTodo } from './domain/todo/createTodo.ts';
import { respondWith404 } from './utils/respondWith404.ts';
import { respondWithError } from './utils/respondWithError.ts';
import { handleRequestWith } from './utils/handleRequestWith.ts';
import { createCategory } from './domain/category/createCategory.ts';

declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

const { log } = console;

self.onerror = function (event) {
    log('sw error:', event);
};

self.addEventListener('fetch', async function (event: FetchEvent) {
    const req = event.request.clone();
    var requestUrl = new URL(event.request.url);
    const method = requestUrl.pathname.slice(apiPattern.length);

    switch (event.request.method) {
        case 'POST': {
            handleRequestWith(event, () => handlePostRequest(req, method));
            break;
        }

        case 'PATCH': {
            handleRequestWith(event, () => handlePatchRequest(req, method));
            break;
        }

        case 'DELETE': {
            handleRequestWith(event, () => handleDeleteRequest(req, method));
            break;
        }

        case 'GET': {
            handleGetRequest(event, requestUrl.pathname);
            break;
        }

        default: {
            event.respondWith(respondWithError('Не допустимый http метод'));
        }
    }
});

async function handleGetRequest(event: FetchEvent, pathname: string) {
    // если не перехватываем другие url - sw будет брать их из кэша или сети сам
    if (pathname === '/api/get_todos') {
        event.respondWith(
            loadState().then(() => {
                return new Response(JSON.stringify(state), {
                    headers: jsonHeader,
                });
            }),
        );
    }
}

async function handlePostRequest(request: Request, method: string) {
    switch (method) {
        case 'create_category': {
            return createCategory(request, state);
        }

        case 'create_todo': {
            return createTodo(request, state);
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

async function handlePatchRequest(request: Request, method: string): Promise<Response> {
    switch (method) {
        case 'update_category': {
            const data: Category = await request.json();
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        case 'update_todo': {
            const data: Todo = await request.json();
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        default: {
            return respondWith404();
        }
    }
}

async function handleDeleteRequest(request: Request, method: string): Promise<Response> {
    switch (method) {
        case 'delete_category': {
            const data: Category = await request.json();
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        case 'delete_todo': {
            const data: Todo = await request.json();
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        default: {
            return respondWith404();
        }
    }
}

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    const onActivate = async (): Promise<any> => {
        if (!state) {
            await loadState();
        }
    };

    event.waitUntil(onActivate());
    clients.claim();
});
