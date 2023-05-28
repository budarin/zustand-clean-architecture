import { navigationFilterTypes } from '../../domain/navigationFilter';
import { getNavigationFilter } from '../../selectors/getNavigationFilter';
import { getTodosCountByTimestamp } from '../../selectors/getTodosCountByTimestamp';

import { type CalendarDayContainerType } from '../../../ui/Calendar';

const CalendarDayContainer = function (props: CalendarDayContainerType) {
    const { day, value, inCurrentMonth, isToday, isWeekend, dayComponent: Day } = props;

    const navFilter = getNavigationFilter();
    const todosCount = getTodosCountByTimestamp(value);
    const selected = navFilter.type === navigationFilterTypes.calendar && value === navFilter.key;

    return (
        <Day
            day={day}
            value={value}
            todosCount={todosCount}
            selected={selected}
            isToday={isToday}
            isWeekend={isWeekend}
            inCurrentMonth={inCurrentMonth}
        />
    );
};

export default CalendarDayContainer;
