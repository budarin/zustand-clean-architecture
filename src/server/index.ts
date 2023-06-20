import { handleFetchEvent } from './utils/handleFetchEvent.ts';
import { onActivate } from './utils/onActivate.ts';

declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

const { log } = console;

self.addEventListener('install', () => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(onActivate());
    clients.claim();
});

self.addEventListener('fetch', handleFetchEvent);

self.onerror = function (event) {
    log('sw error:', event);
};
