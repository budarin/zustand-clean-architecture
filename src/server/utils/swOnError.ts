export function swOnError(event: string | ErrorEvent | Event): void {
    const { log } = console;

    log('sw error:', event);
}
