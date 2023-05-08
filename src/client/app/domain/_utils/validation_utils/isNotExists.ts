import { exists } from './exists';

export function isNotExists(x: unknown): boolean {
    return !exists(x);
}
