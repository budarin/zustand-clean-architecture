export function areParsedDatesEqual(date1: ParsedDate, date2?: ParsedDate): boolean {
    if (!date2) {
        return false;
    }

    return date1.month === date2.month && date1.day === date2.day && date1.year === date2.year;
}
