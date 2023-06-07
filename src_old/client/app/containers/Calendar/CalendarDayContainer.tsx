import { navigationFilterTypes } from '../../../../../src/domain/entities/navigationFilter';
import { getNavigationFilter } from '../../../../../src/domain/selectors/getNavigationFilter.ts';
import { getTodosCountByTimestamp } from '../../../../../src/domain/selectors/getTodosCountByTimestamp.ts';

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
