import { isEmptyObjectOrUndefined } from './isEmptyObjectOrUndefined';

export function everyIsEmptyObjectOrUndefined(x: UnknownObject): boolean {
    return Object.values(x).every(isEmptyObjectOrUndefined);
}
