import { isEmptyArrayOrUndefined } from './isEmptyArrayOrUndefined';

export function everyPropIsEmptyArrayOrUndefined(x: UnknownObject): boolean {
    return Object.values(x).every(isEmptyArrayOrUndefined);
}
