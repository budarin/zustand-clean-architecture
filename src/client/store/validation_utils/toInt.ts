import { isInt } from './isInt.ts';
import { isString } from './isString.ts';

export function toInt(x: unknown): number | undefined {
    if (isInt(x)) {
        return x;
    }
    if (isString(x)) {
        const num = parseInt(x, 10);

        if (num.toString() === x) {
            return num;
        }

        if (isNaN(num)) {
            return;
        }
    }
}

export type ToInt = typeof toInt;
