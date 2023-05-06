import { isEmptyArrayOrUndefined } from './isEmptyArrayOrUndefined';

export function everyIsEmptyArrayOrUndefined(x: UnknownObject): boolean {
    return Object.values(x).every(isEmptyArrayOrUndefined);
}
