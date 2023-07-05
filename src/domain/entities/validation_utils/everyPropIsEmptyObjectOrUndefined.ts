import { isEmptyObjectOrUndefined } from './isEmptyObjectOrUndefined.ts';

export function everyPropIsEmptyObjectOrUndefined(x: UnknownObject): boolean {
    return Object.values(x).every(isEmptyObjectOrUndefined);
}
