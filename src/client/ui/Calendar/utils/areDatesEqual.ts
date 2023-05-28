export function areDatesEqual(date1?: Date, date2?: Date): boolean {
    if (date1 === undefined || date2 === undefined) {
        return false;
    }

    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
}
