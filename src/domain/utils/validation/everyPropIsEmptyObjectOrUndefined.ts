import { isEmptyObjectOrUndefined } from './isEmptyObjectOrUndefined';

export function everyPropIsEmptyObjectOrUndefined(x: UnknownObject): boolean {
    return Object.values(x).every(isEmptyObjectOrUndefined);
}
