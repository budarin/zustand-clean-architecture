import { jsonHeader } from './consts.ts';

export function respondWith404(): TypedResponse<JsonRpcResult<undefined, undefined>> {
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
