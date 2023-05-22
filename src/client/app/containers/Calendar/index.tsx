import { useTodoStore } from '../../domain/store';
import { navigationFilterTypes } from '../../domain/navigationFilter';

// components
import Calendar from '../../../ui/Calendar';

const isCalendarSelectedSelector = (state: State) => {
    return state.navigationFilter.type === navigationFilterTypes.calendar;
};

function CalendarContainer() {
    const isCalendarSelected = useTodoStore(isCalendarSelectedSelector);

    return <Calendar selected={isCalendarSelected} />;
}

export default CalendarContainer;
