// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TypedResponse<T> extends Response {
    json<T>(): Promise<T>;
}
