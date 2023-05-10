import React from 'react';

import { navigationFilterTypes, recycleBinKey } from '../../../../../common/domain/navigationFilter';

// components
import NavigationPanelItemContainer from '../PanelItem';
import UtilitySection from '../../../../ui/NavPanel/UtilitySection';

function UtilitySectionContainer() {
    return (
        <UtilitySection>
            <NavigationPanelItemContainer
                key={recycleBinKey}
                id={recycleBinKey}
                navigationType={navigationFilterTypes.filter}
            />
        </UtilitySection>
    );
}

export default UtilitySectionContainer;
