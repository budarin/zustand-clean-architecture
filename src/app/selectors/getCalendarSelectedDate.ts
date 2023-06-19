import { useTodoStore } from '../../domain/store/store.tsx';
import { navigationFilterTypes } from '../../domain/store/navigationFilter/index.ts';

const getCalendarSelectedDateSelector = (state: TodosState) => {
    if (state.navigationFilter.type === navigationFilterTypes.calendar) {
        return new Date(state.navigationFilter.key);
    }
};

export const getCalendarSelectedDate = () => useTodoStore(getCalendarSelectedDateSelector);
