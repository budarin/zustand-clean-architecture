export function getDateFromDateTime(datetime: Date): Date {
    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate());
}
