import { jsonHeader } from './consts';

export function respondWithError(msg: string, data: any = undefined) {
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
