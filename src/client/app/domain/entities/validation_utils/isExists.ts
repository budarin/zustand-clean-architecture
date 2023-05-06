export function isExists(x: unknown): boolean {
    return (x !== undefined && x !== null) || (typeof x === 'number' && !isNaN(x));
}
