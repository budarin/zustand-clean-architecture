import * as KVStorage from '../contracts/KVStorage/index.ts';

interface KVStorage {
    get(key: string): string | undefined;
    set(key: string, value: string): void;
    remove(key: string): void;
    clear(): void;
}

export function getKVStorage(): KVStorage {
    return KVStorage;
}
