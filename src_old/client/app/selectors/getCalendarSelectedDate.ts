import { useTodoStore } from '../../domain/entities/store';
import { navigationFilterTypes } from '../../domain/entities/navigationFilter';

const getCalendarSelectedDateSelector = (state: TodosState) => {
    if (state.navigationFilter.type === navigationFilterTypes.calendar) {
        return new Date(state.navigationFilter.key);
    }
};

export const getCalendarSelectedDate = () => useTodoStore(getCalendarSelectedDateSelector);