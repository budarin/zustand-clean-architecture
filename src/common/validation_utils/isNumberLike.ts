export function isNumberLike(x: unknown): x is number | string {
    return typeof x === 'number' || (typeof x === 'string' && x.trim() !== '' && isNaN(Number(x)) === false);
}
