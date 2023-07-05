import { exists } from './exists.ts';

export function isNotExists<T>(x: T | undefined | null): x is undefined | null {
    return !exists(x);
}
