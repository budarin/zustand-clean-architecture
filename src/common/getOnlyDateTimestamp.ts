export function getOnlyDateTimestamp(dateStr: string): Timestamp {
    let d = new Date(dateStr);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    return d.valueOf();
}
