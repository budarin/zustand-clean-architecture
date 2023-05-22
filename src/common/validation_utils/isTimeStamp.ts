import { isInt } from './isInt';

export function isTimeStamp(x: unknown): x is number {
    return isInt(x);
}
