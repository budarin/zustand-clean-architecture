import { MouseEventHandler, useCallback } from 'react';

import { getCalendarSelectedDate } from '../../selectors/getCalendarSelectedDate';
import { setCalendarSelectedDate } from '../../useCases/setCalendarSelecteddate';

// components
import Calendar from '../../../ui/Calendar';
import CalendarDayContainer from './CalendarDayContainer';

function CalendarContainer() {
    const selectedDate = getCalendarSelectedDate();

    // внимание !!!
    // тут мы используем Store вне компонента React
    // в обработчике события нельзя использовать хуки а в Zustand мы имеем доступ к Store !
    const onCalendarSelectDate: MouseEventHandler<HTMLDivElement> = useCallback(function (event) {
        const selectedDateTimestamp = Number((event.target as HTMLElement).dataset.date);
        const selectedDate = new Date(selectedDateTimestamp);

        setCalendarSelectedDate(selectedDate);
    }, []);

    return (
        <Calendar
            selectedDate={selectedDate}
            // фишка !!! смотри обработчик
            onSelectDate={onCalendarSelectDate}
            dayContainer={CalendarDayContainer}
        />
    );
}

export default CalendarContainer;
