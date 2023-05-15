import { serverInitialState } from './serverInitialState';

const { log } = console;

self.addEventListener('fetch', function (event: FetchEvent) {
    var requestUrl = new URL(event.request.url);

    if (event.request.method === 'GET') {
        if (requestUrl.pathname.startsWith('/api/')) {
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
