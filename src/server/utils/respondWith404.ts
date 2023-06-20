import { jsonHeader } from './consts';

export function respondWith404(): TypedResponse<JsonRpcError<undefined>> {
    return new Response(
        JSON.stringify({
            error: {
                code: 404,
                error: 'Not found',
            },
        }),
        {
            headers: jsonHeader,
            status: 200,
        },
    );
}
