export function capitalizeFirstLetter(str: unknown): string | undefined {
    if (typeof str === 'string') {
        return str[0].toUpperCase() + str.slice(1);
    } else {
        return;
    }
}
