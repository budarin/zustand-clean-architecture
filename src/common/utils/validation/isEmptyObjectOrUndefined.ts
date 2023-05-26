import { isObject } from './isObject';
import { isNotExists } from './isNotExists';

export function isEmptyObjectOrUndefined(x: unknown): boolean {
    return isNotExists(x) || (isObject(x) && Object.keys(x).length === 0);
}
