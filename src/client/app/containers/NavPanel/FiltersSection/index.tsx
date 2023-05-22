import React from 'react';

import { inboxKey, overdueKey } from '../../../domain/navigationFilter/index.ts';

// components
import NavigationPanelItemContainer from '../PanelItem';
import Calendar from '../../../../ui/Calendar/index.tsx';
import FiltersSection from '../../../../ui/NavPanel/FiltersSection';
import CalendarContainer from '../../Calendar/index.tsx';

const topFilters = [inboxKey, overdueKey];

function FiltersSectionContainer() {
    return (
        <FiltersSection>
            <CalendarContainer />
            {/* {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))} */}
        </FiltersSection>
    );
}

export default FiltersSectionContainer;
