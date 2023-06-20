import { state } from './domain/state.ts';
import { loadState } from './utils/loadState.ts';
import { apiPattern } from './utils/consts';
import { respondWithError } from './utils/respondWithError.ts';
import { handleRequestWith } from './utils/handleRequestWith.ts';
import { handleGetRequest } from './utils/handleGetRequest.ts';
import { handlePostRequest } from './utils/handlePostRequest.ts';
import { handlePatchRequest } from './utils/handlePatchRequest.ts';
import { handleDeleteRequest } from './utils/handleDeleteRequest.ts';

declare var self: ServiceWorkerGlobalScope & typeof globalThis & { VERSION: string };

self.VERSION = '1.0.0';

const { log } = console;

self.onerror = function (event) {
    log('sw error:', event);
};

// перехватываем запросы к api у сервис-воркера
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
