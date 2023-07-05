import { isInt } from './isInt.ts';

export function isTimeStamp(x: unknown): x is number {
    return isInt(x);
}
