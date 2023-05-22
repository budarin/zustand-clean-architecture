type ParsedDate = {
    year: number;
    month: number;
    day: number;
};

type CalendarState = {
    currentDay: ParsedDate;
    title: string;
    selectedDay: ParsedDate;
    startDay: ParsedDate;
    daysCount: number;
};
