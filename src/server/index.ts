import { jsonHeader } from './utils/consts';
import { saveState } from './utils/saveState.ts';
import { serverInitialState } from './utils/serverInitialState';
import { responseWithResult } from './utils/responseWithResult.ts';
import { validateCategoryEntity } from './domain/category/validateCategoryEntity.ts';

declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

const apiPattern = '/api/';
export const todosUrl = '/api/get_todos';

let state: Entities;
const { log } = console;

async function loadState() {
    if (state === undefined) {
        try {
            const cache = await caches.open('todo-sw');
            const response = await cache.match(todosUrl);

            if (response !== undefined) {
                const data = await response.json();

                if (data) {
                    state = data;
                }
            }

            if (!state) {
                state = serverInitialState;
                await saveState(state);
            }
        } catch (error) {
            log('sw: error in loadState', error);
        }
    }
}

self.onerror = function (event) {
    const { log } = console;

    log('sw error:', event);
};

self.addEventListener('fetch', async function (event: FetchEvent) {
    var requestUrl = new URL(event.request.url);
    const method = requestUrl.pathname.slice(apiPattern.length);

    if (event.request.method === 'POST') {
        if (!event.request.body) {
            return;
        }

        const req = event.request.clone();
        event.respondWith(
            loadState()
                .then(() => handlePostRequest(req, method))
                .then((responce) => {
                    saveState(state);
                    return responce;
                }),
        );
        return;
    }

    if (event.request.method === 'PATCH') {
        const req = event.request.clone();
        event.respondWith(
            loadState()
                .then(() => handlePatchRequest(req, method))
                .then((responce) => {
                    saveState(state);
                    return responce;
                }),
        );
        return;
    }

    if (event.request.method === 'DELETE') {
        const req = event.request.clone();
        event.respondWith(
            loadState()
                .then(() => handleDeleteRequest(req, method))
                .then((responce) => {
                    saveState(state);
                    return responce;
                }),
        );
        return;
    }

    if (event.request.method === 'GET') {
        if (requestUrl.pathname === '/api/get_todos') {
            event.respondWith(
                loadState().then(() => {
                    return handleGetRequest();
                }),
            );
            return;
        }
    }
});

function responseWithError(msg: string, data: any = undefined) {
    return new Response(
        JSON.stringify({
            error: {
                code: 500,
                error: msg,
                data,
            },
        }),
        {
            headers: jsonHeader,
            status: 200,
        },
    );
}

async function handlePostRequest(request: Request, method: string) {
    switch (method) {
        case 'create_category': {
            try {
                const data = await request.json();
                const { entity, error } = validateCategoryEntity(data, state);

                if (error !== undefined) {
                    responseWithError(error);
                } else {
                    const ids = state?.categories?.map((item) => item.category_id) || [1];
                    const newId = Math.max(...ids);
                    const newCategory = { ...entity, category_id: newId };

                    state?.categories?.push(newCategory);

                    return responseWithResult(newCategory);
                }
            } catch (error) {
                const { message, stack } = error as Error;

                return responseWithError(message, stack);
            }
        }

        case 'create_todo': {
            const data: NewTodo = await request.json();
            const ids = state?.todos?.map((item) => item.todo_id) || [1];
            const newId = Math.max(...ids);
            const newTodo = { ...data, todo_id: newId };
            state?.todos?.push(newTodo);

            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
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
            return new Response(null, {
                status: 404,
            });
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
            return new Response(null, {
                status: 404,
            });
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
            return new Response(null, {
                status: 404,
            });
        }
    }
}

function handleGetRequest(): Response {
    return new Response(JSON.stringify(state), {
        headers: jsonHeader,
    });
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
