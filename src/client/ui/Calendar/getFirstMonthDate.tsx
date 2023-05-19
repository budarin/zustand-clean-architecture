export function getFirstMonthDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
}
