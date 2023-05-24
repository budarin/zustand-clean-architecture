import { useTodoStore } from '../../domain/store';
import { navigationFilterTypes } from '../../domain/navigationFilter';

// components
import Calendar from '../../../ui/Calendar';
import CalendarDayContainer from './CalendarDayContainer';

const selectedDateSelector = (state: TodosState) => {
    if (state.navigationFilter.type === navigationFilterTypes.calendar) {
        return new Date(state.navigationFilter.key);
    }
};

function CalendarContainer() {
    const selectedDate = useTodoStore(selectedDateSelector);
    return <Calendar selectedDate={selectedDate} dayContainer={CalendarDayContainer} />;
}

export default CalendarContainer;
