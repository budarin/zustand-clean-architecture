const ONE_DAY = 1000 * 60 * 60 * 24;

export function getDatesDiffInDays(date1: Date, date2: Date) {
    const diffInMilliseconds = Math.abs(date2.getTime() - date1.getTime());

    return Math.ceil(diffInMilliseconds / ONE_DAY);
}
