function handleGetData(request: Request) {
    // Обработка GET-запроса и возврат ответа
    // Например, вы можете использовать Fetch API для получения данных с сервера
    return fetch(request)
        .then(function (response) {
            // Обработка ответа от сервера, если необходимо
            return response;
        })
        .catch(function (error) {
            // Обработка ошибок, если необходимо
            console.error('Ошибка при обработке GET-запроса:', error);
            return new Response('Внутренняя ошибка сервера', {
                status: 500,
                statusText: 'Internal Server Error',
            });
        });
}

function handlePostRequest(request: Request) {
    // Обработка POST-запроса и возврат ответа
    // Например, вы можете использовать Fetch API для отправки запроса на сервер
    return fetch(request)
        .then(function (response) {
            // Обработка ответа от сервера, если необходимо
            return response;
        })
        .catch(function (error) {
            // Обработка ошибок, если необходимо
            console.error('Ошибка при обработке POST-запроса:', error);
            return new Response('Внутренняя ошибка сервера', {
                status: 500,
                statusText: 'Internal Server Error',
            });
        });
}

self.addEventListener('fetch', function (event: FetchEvent) {
    var requestUrl = new URL(event.request.url);

    if (event.request.method === 'POST') {
        // Обработка POST-запроса здесь
        if (requestUrl.pathname.startsWith('/api/')) {
            event.respondWith(handlePostRequest(event.request));
            return;
        }
        return;
    }

    if (event.request.method === 'GET') {
        // Обработка GET-запроса к определенным URL
        if (requestUrl.pathname.startsWith('/api/')) {
            event.respondWith(handleGetData(event.request));
            return;
        }
    }

    // Другие обработчики запросов, например кэширование статических ресурсов
});
