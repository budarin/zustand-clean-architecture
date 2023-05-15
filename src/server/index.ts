import { serverInitialState } from './serverInitialState';

const { log } = console;
const apiPattern = '/api/';

self.addEventListener('fetch', function (event: FetchEvent) {
    var requestUrl = new URL(event.request.url);
    const method = requestUrl.pathname.slice(apiPattern.length);

    if (event.request.method === 'POST') {
        if (requestUrl.pathname.startsWith('/api/')) {
            switch (method) {
                case 'create_category': {
                    break;
                }
                case 'create_category': {
                    break;
                }

                default:
                    break;
            }

            event.respondWith(
                new Response(JSON.stringify(serverInitialState), {
                    headers: { 'Content-Type': 'application/json; charset=utf-8' },
                }),
            );
        }
    }

    if (event.request.method === 'PATCH') {
        if (requestUrl.pathname.startsWith('/api/')) {
            switch (method) {
                case 'update_category': {
                    break;
                }
                case 'update_category': {
                    break;
                }

                default:
                    break;
            }

            event.respondWith(
                new Response(JSON.stringify(serverInitialState), {
                    headers: { 'Content-Type': 'application/json; charset=utf-8' },
                }),
            );
        }
    }

    if (event.request.method === 'DELETE') {
        if (requestUrl.pathname.startsWith('/api/')) {
            switch (method) {
                case 'delete_category': {
                    break;
                }
                case 'delete_category': {
                    break;
                }

                default:
                    break;
            }

            event.respondWith(
                new Response(JSON.stringify(serverInitialState), {
                    headers: { 'Content-Type': 'application/json; charset=utf-8' },
                }),
            );
        }
    }

    if (event.request.method === 'GET') {
        if (requestUrl.pathname === '/api/get_todos') {
            event.respondWith(
                new Response(JSON.stringify(serverInitialState), {
                    headers: { 'Content-Type': 'application/json; charset=utf-8' },
                }),
            );
        }
    }
});

self.addEventListener('activate', (event) => {
    clients.claim();
});

self.addEventListener('install', (event) => {
    self.skipWaiting();
});
