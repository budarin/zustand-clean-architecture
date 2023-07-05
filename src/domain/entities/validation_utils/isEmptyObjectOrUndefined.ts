import { isObject } from './isObject.ts';
import { isNotExists } from './isNotExists.ts';

export function isEmptyObjectOrUndefined(x: unknown): boolean {
    return isNotExists(x) || (isObject(x) && Object.keys(x).length === 0);
}
