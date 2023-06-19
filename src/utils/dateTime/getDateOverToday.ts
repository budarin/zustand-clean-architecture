export function getDateOverToday(day: number) {
    const dt = new Date();
    dt.setDate(dt.getDate() + day);

    return dt.toISOString();
}
