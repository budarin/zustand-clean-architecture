export function get(key: string): string | undefined {
    return window.localStorage.getItem(key) || undefined;
}

export function set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
}

export function remove(key: string): void {
    window.localStorage.removeItem(key);
}

export function clear(): void {
    window.localStorage.clear();
}
