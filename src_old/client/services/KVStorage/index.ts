export function read(key: string): string | null {
    return localStorage.getItem(key);
}

export function write(key: string, value: string): void {
    return localStorage.setItem(key, value);
}

export function remove(key: string): void {
    localStorage.removeItem(key);
}

export type KVStorage = {
    read: typeof read;
    write: typeof write;
    remove: typeof remove;
};
