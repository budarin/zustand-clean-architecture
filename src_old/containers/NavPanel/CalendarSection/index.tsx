import { inboxKey, overdueKey } from '../../../../src/domain/entities/navigationFilter/index.ts';

// components
import CalendarContainer from '../Calendar/index.tsx';
import CalendarSection from '../../../components/NavPanel/CalendarSection/index.tsx';

const topFilters = [inboxKey, overdueKey];

function CalendarSectionContainer() {
    return (
        <CalendarSection>
            <CalendarContainer />
        </CalendarSection>
    );
}

export default CalendarSectionContainer;
