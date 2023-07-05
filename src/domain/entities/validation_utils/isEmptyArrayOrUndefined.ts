import { isNotExists } from './isNotExists.ts';

export function isEmptyArrayOrUndefined(x: unknown): boolean {
    return isNotExists(x) || (Array.isArray(x) && x.length === 0);
}
