import { useTodoStore } from '../../domain/store/store.tsx';
import { navigationFilterTypes } from '../../domain/store/navigationFilter/index.ts';

/**
 * Возвращает выделенную дату если она выбрана в календаре в качестве активного элемента
 * в панели навигации иначе - undefined
 */

const getCalendarSelectedDateSelector = (state: TodosState): Date | undefined => {
    if (state.navigationFilter.type === navigationFilterTypes.calendar) {
        return new Date(state.navigationFilter.key);
    }
};

export const getCalendarSelectedDate = () => useTodoStore(getCalendarSelectedDateSelector);
