import { serverInitialState } from './serverInitialState';

declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

const apiPattern = '/api/';
const todosUrl = '/api/get_todos';
const jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' };

let state: Entities | undefined;
const { log } = console;

async function saveState() {
    const cache = await caches.open('todo-sw');
    const stateStr = JSON.stringify(state);

    await cache.put(
        todosUrl,
        new Response(stateStr, {
            headers: new Headers({
                ...jsonHeader,
                'Cache-Control': 'max-age=31536000',
                'Content-Length': String(stateStr.length),
            }),
        }),
    );
}

async function loadState(): Promise<true> {
    log('state', state);

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
                await saveState();
            }
        } catch (error) {
            log('sw: error in loadState', error);
        }
    }

    return true;
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
                .then(() => {
                    return handlePostRequest(req, method);
                })
                .then((responce) => {
                    saveState();
                    return responce;
                }),
        );
        return;
    }

    if (event.request.method === 'PATCH') {
        const req = event.request.clone();
        event.respondWith(
            loadState()
                .then(() => {
                    return handlePatchRequest(req, method);
                })
                .then((responce) => {
                    saveState();
                    return responce;
                }),
        );
        return;
    }

    if (event.request.method === 'DELETE') {
        const req = event.request.clone();
        event.respondWith(
            loadState()
                .then(() => {
                    return handleDeleteRequest(req, method);
                })
                .then((responce) => {
                    saveState();
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

async function handlePostRequest(request: Request, method: string): Promise<Response> {
    const data = await request.json();

    switch (method) {
        case 'create_category': {
            const response = new Response(JSON.stringify(data), {
                headers: jsonHeader,
                status: 200,
            });

            return response;
        }

        case 'create_todo': {
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        case 'log': {
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
    const data = await request.json();
    // console.log('PATCH', method, data);

    switch (method) {
        case 'update_category': {
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        case 'update_todo': {
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
    const data = await request.json();
    // console.log('DELETE', method, data);

    switch (method) {
        case 'delete_category': {
            const response = new Response(JSON.stringify(data), {
                status: 200,
            });

            return response;
        }

        case 'delete_todo': {
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
