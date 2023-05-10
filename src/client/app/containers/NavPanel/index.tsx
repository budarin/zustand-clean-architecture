import React from 'react';

// components
import FiltersSection from './FiltersSection';
import UtilitySection from './UtilitySection';
import NavigationPanel from '../../../ui/NavPanel';
import CategorySectionContainer from './CategorySection';

import './index.css';

function NavigationPanelContainer() {
    return (
        <NavigationPanel>
            <FiltersSection />
            <CategorySectionContainer />
            <UtilitySection />
        </NavigationPanel>
    );
}

export default NavigationPanelContainer;
