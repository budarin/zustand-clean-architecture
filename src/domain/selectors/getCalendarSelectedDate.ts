import { useTodoStore } from '../store/store.tsx';
import { navigationFilterTypes } from '../entities/navigationFilter';

const getCalendarSelectedDateSelector = (state: TodosState) => {
    if (state.navigationFilter.type === navigationFilterTypes.calendar) {
        return new Date(state.navigationFilter.key);
    }
};

export const getCalendarSelectedDate = () => useTodoStore(getCalendarSelectedDateSelector);
