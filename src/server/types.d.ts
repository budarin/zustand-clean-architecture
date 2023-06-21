interface TypedResponse<T = any> extends Response {
    json<T>(): Promise<T>;
}
