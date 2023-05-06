import { isInt } from './isInt.ts';
import { isString } from './isString.ts';

// конверторы

export function toTimeStamp(x: unknown): number | undefined {
    if (isInt(x)) {
        return x;
    }
    if (isString(x)) {
        const parsed = Date.parse(x);

        if (isNaN(parsed)) {
            return;
        }

        return parsed;
    }
}

export type ToRimeStamp = typeof toTimeStamp;
