import { isExists } from './isExists';

export function isNotExists(x: unknown): boolean {
    return !isExists(x);
}
