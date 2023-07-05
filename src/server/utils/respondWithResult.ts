import { jsonHeader } from './consts.ts';

export function respondWithResult<T>(result: T, status = 200): TypedResponse<JsonRpcResult<T>> {
    return new Response(
        JSON.stringify({
            result,
        }),
        {
            headers: jsonHeader,
            status,
        },
    );
}
