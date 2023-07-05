import { logger } from '../services/logger.ts';

export function swOnError(event: string | ErrorEvent | Event): void {
    logger.error({ error: 'sw error:', event });
}
