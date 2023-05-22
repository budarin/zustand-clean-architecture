import React from 'react';

// components
import NavigationPanel from '../../../ui/NavPanel';
import UtilitySectionContainer from './UtilitySection';
import FiltersSectionContainer from './FiltersSection';
import CategorySectionContainer from './CategorySection';
import CalendarSectionContainer from './CalendarSection';

type NavigationPanelContainer = {
    isOpen: boolean;
};

function NavigationPanelContainer(props: NavigationPanelContainer) {
    const { isOpen } = props;

    return (
        <NavigationPanel isOpen={isOpen}>
            <CalendarSectionContainer />
            <FiltersSectionContainer />
            <CategorySectionContainer />
            <UtilitySectionContainer />
        </NavigationPanel>
    );
}

export default NavigationPanelContainer;
