import { exists } from './exists';

export function isNotExists<T>(x: T | undefined | null): x is undefined | null {
    return !exists(x);
}
