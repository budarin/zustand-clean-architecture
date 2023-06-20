export const onCatchError = (error: Error) => ({
    error: {
        code: 500,
        error: error.message,
        data: error,
    },
});
