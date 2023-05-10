import React from 'react';

import {
    inboxKey,
    navigationFilterTypes,
    nextKey,
    todayKey,
} from '../../../../../common/domain/navigationFilter';
import NavigationPanelItemContainer from '../PanelItem';

const topFilters = [todayKey, nextKey, inboxKey];

function FiltersSection() {
    return (
        <>
            <h4>Фильтры</h4>
            {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))}
        </>
    );
}

export default FiltersSection;
