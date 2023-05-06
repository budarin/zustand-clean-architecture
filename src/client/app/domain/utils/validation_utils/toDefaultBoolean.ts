import { isString } from './isString.ts';
import { isBoolean } from './isBoolean.ts';
import { isUndefined } from './isUndefined.ts';

export function toDefaultBoolean(byDefault: boolean): (x: unknown) => boolean | undefined {
    return (x: unknown) => {
        if (isBoolean(x)) {
            return x;
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

        if (isUndefined(x)) {
            return byDefault;
        }
    };
}

export type ToDefaultBoolean = typeof toDefaultBoolean;
