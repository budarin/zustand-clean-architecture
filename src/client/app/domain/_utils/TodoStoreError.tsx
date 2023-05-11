export class TodoStoreError extends Error {
    data;

    constructor(message: string, data?: Record<string | number, unknown>) {
        super(message);
        this.name = 'TodoStoreError';
        this.data = data;
    }
}
