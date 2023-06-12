import { MouseEventHandler, useCallback } from 'react';

import { getCalendarSelectedDate } from '../../../../src/app/selectors/getCalendarSelectedDate.ts';
import { setSelectedCalendarDate } from '../../../../src/app/useCases/setSelectedCalendarDate.ts';

// components
import CalendarDayContainer from './CalendarDayContainer.tsx';
import Calendar from '../../../components/NavPanel/Calendar/index.tsx';

function CalendarContainer() {
    const selectedDate = getCalendarSelectedDate();

    // внимание !!!
    // тут мы используем Store вне компонента React
    // в обработчике события нельзя использовать хуки а в Zustand мы имеем доступ к Store !
    const onCalendarSelectDate: MouseEventHandler<HTMLDivElement> = useCallback(function (event) {
        const selectedDateTimestamp = Number((event.target as HTMLElement).dataset.date);
        const selectedDate = new Date(selectedDateTimestamp);

        setSelectedCalendarDate(selectedDate);
    }, []);

    return (
        <Calendar selectedDate={selectedDate} onSelectDate={onCalendarSelectDate} dayContainer={CalendarDayContainer} />
    );
}

export default CalendarContainer;
