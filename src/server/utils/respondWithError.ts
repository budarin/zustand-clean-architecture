import { jsonHeader } from './consts';

export function respondWithError<T = undefined>(msg: string, data?: T): TypedResponse<JsonRpcError<T>> {
    return new Response(
        JSON.stringify({
            error: {
                code: 500,
                error: msg,
                data,
            },
        }),
        {
            headers: jsonHeader,
            status: 200,
        },
    );
}
