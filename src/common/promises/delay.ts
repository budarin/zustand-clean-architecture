export function delay(ms: number): Promise<unknown> {
    return new Promise((resolve): void => {
        setTimeout(resolve, ms);
    });
}
