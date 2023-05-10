import React from 'react';

import { navigationFilterTypes, recycleBinKey } from '../../../../../common/domain/navigationFilter';

import NavigationPanelItemContainer from '../PanelItem';

function UtilitySection() {
    return (
        <>
            <h4>Утилиты</h4>

            <NavigationPanelItemContainer
                key={recycleBinKey}
                id={recycleBinKey}
                navigationType={navigationFilterTypes.filter}
            />
        </>
    );
}

export default UtilitySection;
