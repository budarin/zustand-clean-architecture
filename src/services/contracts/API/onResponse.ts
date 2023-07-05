export const onResponse = <T>(resp: Response): Promise<JsonRpc<T, Error>> => resp.json();
