import { useTodoStore } from '../domain/store';
import { navigationFilterTypes } from '../domain/navigationFilter';

const selector = (state: TodosState) => {
    if (state.navigationFilter.type === navigationFilterTypes.calendar) {
        return new Date(state.navigationFilter.key);
    }
};

export const getCalendarSelectedDate = () => useTodoStore(selector);
