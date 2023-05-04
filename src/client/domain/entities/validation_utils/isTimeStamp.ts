import { isInt } from './isInt';

export function isTimeStamp(x: unknown): boolean {
    return isInt(x);
}
