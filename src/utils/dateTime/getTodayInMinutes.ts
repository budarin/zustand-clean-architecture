export function getTodayInMinutes(minutes: number) {
    const dt = new Date();
    dt.setMinutes(dt.getMinutes() + minutes);

    return dt.toISOString();
}
