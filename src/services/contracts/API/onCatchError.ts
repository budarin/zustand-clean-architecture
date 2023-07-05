export const onCatchError = <T>(error: Error): JsonRpc<T, Error> => ({
    error: {
        code: 500,
        error: error.message,
        data: error,
    },
});
