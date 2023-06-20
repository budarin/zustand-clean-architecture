import { apiPattern } from './consts.ts';
import { respondWithError } from './respondWithError.ts';
import { handleRequestWith } from './handleRequestWith.ts';
import { handleGetRequest } from './handleGetRequest.ts';
import { handlePostRequest } from './handlePostRequest.ts';
import { handlePatchRequest } from './handlePatchRequest.ts';
import { handleDeleteRequest } from './handleDeleteRequest.ts';

// перехватываем запросы к api у сервис-воркера
export async function handleFetchEvent(event: FetchEvent): Promise<void> {
    const req = event.request.clone();
    var requestUrl = new URL(event.request.url);
    const method = requestUrl.pathname.slice(apiPattern.length);

    switch (event.request.method) {
        case 'GET': {
            handleGetRequest(event, requestUrl.pathname);
            break;
        }

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

        default: {
            event.respondWith(respondWithError('Не допустимый http метод'));
        }
    }
}
