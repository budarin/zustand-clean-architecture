export function isNumberLike(x: unknown): boolean {
    return typeof x === 'number' || (typeof x === 'string' && x.trim() !== '' && isNaN(Number(x)) === false);
}
