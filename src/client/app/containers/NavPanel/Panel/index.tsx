import React from 'react';

import { useTodoStore } from '../../../domain/store';
import {
    inboxKey,
    navigationFilterTypes,
    nextKey,
    recycleBinKey,
    todayKey,
} from '../../../../../common/domain/navigationFilter';

// components
import NavigationPanelItemContainer from '../PanelItem';
import NavigationPanel from '../../../../ui/NavPanel/Panel';
import { CategoryHeadersContainer } from '../CategoryHeader';

import './index.css';

const topFilters = [todayKey, nextKey, inboxKey];

// selectors
const getCategoryIds = (state: State) => state.categories.ids;

function NavigationPanelContainer() {
    const categoryIds = useTodoStore(getCategoryIds);

    return (
        <NavigationPanel>
            <h4>Фильтры</h4>
            {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))}

            <CategoryHeadersContainer />

            {categoryIds.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.category} />
            ))}

            <h4>Утилиты</h4>

            <NavigationPanelItemContainer
                key={recycleBinKey}
                id={recycleBinKey}
                navigationType={navigationFilterTypes.filter}
            />
        </NavigationPanel>
    );
}

export default NavigationPanelContainer;
