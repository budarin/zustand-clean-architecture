import React from 'react';

// components
import NavigationPanel from '../../../ui/NavPanel';
import UtilitySectionContainer from './UtilitySection';
import FiltersSectionContainer from './FiltersSection';
import CategorySectionContainer from './CategorySection';

function NavigationPanelContainer() {
    return (
        <NavigationPanel>
            <FiltersSectionContainer />
            <CategorySectionContainer />
            <UtilitySectionContainer />
        </NavigationPanel>
    );
}

export default NavigationPanelContainer;
