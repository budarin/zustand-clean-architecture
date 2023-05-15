import { serverInitialState } from './serverInitialState';

const apiPattern = '/api/';
const jsonHeader = { 'Content-Type': 'application/json; charset=utf-8' };

const { log, warn, error } = console;

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
    console.log('POST', method, data);

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
                    log('[INFO]', data);
                    break;
                }
                case 'warning': {
                    log('[WARN]', data);
                    break;
                }
                case 'error': {
                    log('[ERROR]', data);
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
    console.log('PATCH', method, data);

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
    console.log('DELETE', method, data);

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

self.addEventListener('activate', (event) => {
    clients.claim();
});

self.addEventListener('install', (event) => {
    self.skipWaiting();
});
