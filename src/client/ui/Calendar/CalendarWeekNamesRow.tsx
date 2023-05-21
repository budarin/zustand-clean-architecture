const weekDayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

export function CalendarWeekNamesRow() {
    return (
        <div className="Calendar-WeekNames">
            {weekDayNames.map((name) => {
                return (
                    <span className="Calendar-WeekName" key={name}>
                        {name}
                    </span>
                );
            })}
        </div>
    );
}
