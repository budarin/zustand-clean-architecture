import { memo } from 'react';
import { CalendarDayContainerType } from '..';
import CalendarDay from '../CalendarDay/CalendarDay';

type CalendarBody = {
    daysCount: number;
    month: number;
    startDay: ParsedDate;
    todayDay: ParsedDate;
    onSelectDate: React.MouseEventHandler<HTMLDivElement>;
    dayContainer: React.ComponentType<CalendarDayContainerType>;
};

const CalendarBody = memo(function (props: CalendarBody) {
    const { daysCount, month, startDay, todayDay, onSelectDate, dayContainer: CalendarDayContainer } = props;

    return (
        <div className="Calendar-Body">
            {Array.from({ length: daysCount }, (_, index) => {
                const date = new Date(startDay.year, startDay.month, startDay.day);
                date.setDate(startDay.day + index);

                const theDate = date.getDate();
                const theDay = date.getDay();
                const key = date.valueOf();

                return (
                    <CalendarDayContainer
                        key={key}
                        day={theDate}
                        value={key}
                        inCurrentMonth={month === date.getMonth()}
                        isToday={todayDay.day === theDate && todayDay.month === date.getMonth()}
                        isWeekend={theDay === 0 || theDay === 6}
                        dayComponent={CalendarDay}
                        onSelectDate={onSelectDate}
                    />
                );
            })}
        </div>
    );
});

CalendarBody.displayName = 'CalendarBody';

export default CalendarBody;
