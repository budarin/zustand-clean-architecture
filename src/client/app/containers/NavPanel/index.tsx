import React from 'react';

// components
import NavigationPanel from '../../../ui/NavPanel';
import UtilitySectionContainer from './UtilitySection';
import FiltersSectionContainer from './FiltersSection';
import CategorySectionContainer from './CategorySection';
import Calendar from '../../../ui/Calendar/index.tsx';

type NavigationPanelContainer = {
    isOpen: boolean;
};

function NavigationPanelContainer(props: NavigationPanelContainer) {
    const { isOpen } = props;

    return (
        <NavigationPanel isOpen={isOpen}>
            <Calendar />
            <FiltersSectionContainer />
            <CategorySectionContainer />
            <UtilitySectionContainer />
        </NavigationPanel>
    );
}

export default NavigationPanelContainer;
