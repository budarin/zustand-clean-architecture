import { useTodoStore } from '../../domain/store';
import { navigationFilterTypes } from '../../domain/navigationFilter';

// components
import Calendar from '../../../ui/Calendar';
import CalendarDayContainer from './CalendarDayContainer';

const isCalendarSelectedSelector = (state: TodosState) => {
    return state.navigationFilter.type === navigationFilterTypes.calendar;
};

function CalendarContainer() {
    const isCalendarSelected = useTodoStore(isCalendarSelectedSelector);
    return <Calendar selected={isCalendarSelected} dayContainer={CalendarDayContainer} />;
}

export default CalendarContainer;
