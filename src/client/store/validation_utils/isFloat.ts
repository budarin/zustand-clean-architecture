export function isFloat(x: unknown): boolean {
    return typeof x === 'number' && !isNaN(x);
}
