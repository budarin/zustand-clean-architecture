import { isEmptyArrayOrUndefined } from './isEmptyArrayOrUndefined.ts';

export function everyPropIsEmptyArrayOrUndefined(x: UnknownObject): boolean {
    return Object.values(x).every(isEmptyArrayOrUndefined);
}
