import { state } from './domain/state.ts';
import { loadState } from './utils/loadState.ts';
import { handleFetchEvent } from './utils/handleFetchEvent.ts';

declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

const { log } = console;

self.addEventListener('install', () => {
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

self.addEventListener('fetch', handleFetchEvent);

self.onerror = function (event) {
    log('sw error:', event);
};
