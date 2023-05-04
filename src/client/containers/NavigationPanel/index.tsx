import React from 'react';

import { useTodoStore } from '../../store/index.tsx';
import { inboxKey, navigationFilterTypes, nextKey, recycleBinKey, todayKey } from '../../store/navigationFilter';

// components
import NavigationPanel from '../../components/NavigationPanel';
import NavigationPanelItemContainer from '../NavigationPanelItem';

import './index.css';

const topFilters = [todayKey, nextKey, inboxKey];

// selectors
const getCategoryIds = (state: State) => state.categories.ids;

function NavigationPanelContainer(): JSX.Element {
    const categoryIds = useTodoStore(getCategoryIds);

    return (
        <NavigationPanel>
            <h4>Фильтры</h4>
            {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))}

            <h4>Категории</h4>
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
