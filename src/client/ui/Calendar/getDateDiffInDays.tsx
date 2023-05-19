const SECONDS_PER_DAY = 1000 * 3600 * 24;

export function getDateDiffInDays(date1: Date, date2: Date): number {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());

    return Math.ceil(timeDiff / SECONDS_PER_DAY) + 1;
}
