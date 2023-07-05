interface TypedResponse extends Response<T> {
    json<T>(): Promise<T>;
}
