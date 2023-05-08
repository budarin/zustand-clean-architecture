import { exists } from './isExists';

export function isNotExists(x: unknown): boolean {
    return !exists(x);
}
