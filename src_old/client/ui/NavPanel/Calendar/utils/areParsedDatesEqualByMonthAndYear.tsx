export function areParsedDatesEqualByMonthAndYear(d1: ParsedDate, d2: ParsedDate): boolean {
    const yearsAreEqual = d1.year === d2.year;
    const monthsAreEqual = d1.month === d2.month;

    return yearsAreEqual && monthsAreEqual;
}
