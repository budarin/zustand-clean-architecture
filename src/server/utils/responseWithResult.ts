import { jsonHeader } from './consts';

export function responseWithResult<T>(result: T, status = 200) {
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
