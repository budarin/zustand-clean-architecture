export function getDateAsParsedDate(date: Date): ParsedDate {
    return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
    };
}
