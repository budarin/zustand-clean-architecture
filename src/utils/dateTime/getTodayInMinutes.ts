export function getTodayInMinutes(minutes: number): string {
    const dt = new Date();
    dt.setMinutes(dt.getMinutes() + minutes);

    return dt.toISOString();
}
