export function getDateOverToday(day: number): string {
    const dt = new Date();
    dt.setDate(dt.getDate() + day);

    return dt.toISOString();
}
