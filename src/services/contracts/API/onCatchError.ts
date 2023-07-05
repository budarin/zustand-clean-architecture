export const onCatchError = (error: Error): { error: { code: number; error: string; data: Error } } => ({
    error: {
        code: 500,
        error: error.message,
        data: error,
    },
});
