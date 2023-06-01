import { serverInitialState } from './serverInitialState';

declare var self: ServiceWorkerGlobalScope & typeof globalThis;

// @ts-ignore
self.VERSION = '1.0.0';

const apiPattern = '/api/';
const jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' };

const { log } = console;

let state: Entities | undefined;

self.addEventListener('fetch', function (event: FetchEvent) {
    var requestUrl = new URL(event.request.url);
    const method = requestUrl.pathname.slice(apiPattern.length);

    if (event.request.method === 'POST') {
        if (!event.request.body) {
            return;
        }

        const req = event.request.clone();
        event.respondWith(handlePostRequest(req, method));
        return;
    }

    if (event.request.method === 'PATCH') {
        const req = event.request.clone();
        event.respondWith(handlePatchRequest(req, method));
        return;
    }

    if (event.request.method === 'DELETE') {
        const req = event.request.clone();
        event.respondWith(handleDeleteRequest(req, method));
        return;
    }

    if (event.request.method === 'GET') {
        if (requestUrl.pathname === '/api/get_todos') {
            event.respondWith(handleGetRequest());
            return;
        }
    }
});

async function handlePostRequest(request: Request, method: string): Promise<Response> {
    const data = await request.json();
    // console.log('POST', method, data);

    switch (method) {
        case 'create_category': {
            return new Response(JSON.stringify(data), {
                headers: jsonHeader,
                status: 200,
            });
        }
        case 'create_todo': {
            return new Response(JSON.stringify(data), {
                status: 200,
            });
        }
        case 'log': {
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
                    log('%c[ERROR]', 'color: #E56353;; font-weight: 600;', data);
                    break;
                }
                default:
                    break;
            }

            return new Response(null, {
                status: 200,
            });
        }

        default:
            return new Response(null, {
                status: 404,
            });
    }
}

async function handlePatchRequest(request: Request, method: string): Promise<Response> {
    const data = await request.json();
    // console.log('PATCH', method, data);

    switch (method) {
        case 'update_category': {
            return new Response(JSON.stringify(data), {
                status: 200,
            });
        }
        case 'update_todo': {
            return new Response(JSON.stringify(data), {
                status: 200,
            });
        }
        default:
            return new Response(null, {
                status: 404,
            });
    }
}

async function handleDeleteRequest(request: Request, method: string): Promise<Response> {
    const data = await request.json();
    // console.log('DELETE', method, data);

    switch (method) {
        case 'delete_category': {
            return new Response(JSON.stringify(data), {
                status: 200,
            });
        }
        case 'delete_todo': {
            return new Response(JSON.stringify(data), {
                status: 200,
            });
        }
        default:
            return new Response(null, {
                status: 404,
            });
    }
}

function handleGetRequest(): Response {
    return new Response(JSON.stringify(serverInitialState), {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
}

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    const onActivate = async (): Promise<any> => {
        const cache = await caches.open('todo-sw');

        if (!state) {
            state = serverInitialState;
            await cache.put('/api/get_todos', new Response(JSON.stringify(state)));
        }
    };

    event.waitUntil(onActivate());
    clients.claim();
});
