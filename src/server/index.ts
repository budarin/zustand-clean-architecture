import { onActivate } from './utils/onActivate.ts';
import { handleFetchEvent } from './utils/handleFetchEvent.ts';

declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(onActivate());
    clients.claim();
});

self.addEventListener('fetch', handleFetchEvent);

self.onerror = function (event) {
    const { log } = console;

    log('sw error:', event);
};
