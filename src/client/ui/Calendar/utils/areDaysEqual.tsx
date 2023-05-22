export function areDaysEqual(day: ParsedDate, date: ParsedDate): boolean {
    return day.month === date.month && day.day === date.day && day.year === date.year;
}
