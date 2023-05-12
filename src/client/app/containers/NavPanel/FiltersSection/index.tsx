import React from 'react';

import { inboxKey, navigationFilterTypes, nextKey, todayKey } from '../../../domain/navigationFilter';

// components
import NavigationPanelItemContainer from '../PanelItem';
import FiltersSection from '../../../../ui/NavPanel/FiltersSection';

const topFilters = [todayKey, nextKey, inboxKey];

function FiltersSectionContainer() {
    return (
        <FiltersSection>
            {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))}
        </FiltersSection>
    );
}

export default FiltersSectionContainer;
