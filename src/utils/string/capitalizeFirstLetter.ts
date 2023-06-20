export function capitalizeFirstLetter(str: any): string | undefined {
    if (typeof str === 'string') {
        return str[0].toUpperCase() + str.slice(1);
    } else {
        return;
    }
}
