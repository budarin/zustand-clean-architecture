type ParsedDate = {
    year: number;
    month: number;
    day: number;
};

type CalendarState = {
    currentDay: ParsedDate;
    title: string;
    startDay: ParsedDate;
    daysCount: number;
};
