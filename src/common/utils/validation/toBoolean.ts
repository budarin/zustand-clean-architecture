import { isBoolean } from './isBoolean.ts';
import { isString } from './isString.ts';

export function toBoolean(x: unknown): boolean | undefined {
    if (isBoolean(x)) {
        return true;
    }
    if (isString(x)) {
        switch (x.toLowerCase()) {
            case 'true':
                return true;
            case 'false':
                return false;

            default:
                return;
        }
    }
}

export type ToBoolean = typeof toBoolean;
