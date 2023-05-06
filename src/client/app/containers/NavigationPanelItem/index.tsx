import React, { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import {
    type NavigationFiltersKey,
    navigationFilterTypes,
    navigationFilters,
} from '../../domain/utils/navigationFilter.ts';

import { useTodoStore } from '../../domain/store.ts';
import { _setNavigationFilter } from '../../domain/entities/navigationFilter/navigationFilter.ts';

// components
import TodosCountBadge from '../TodosCountBadge/index.tsx';
import NavigationIPanelIem from '../../../components/NavigationIPanelIem/index.tsx';

type NavigationPanelItemContainerProps = {
    id: NavigationFilterKey;
    navigationType: NavigationFilterType;
};

//selectors
const selector = (id: NavigationFilterKey, navigationType: NavigationFilterType) =>
    useCallback(
        (state: State) => {
            let checked = false;
            let title = '';

            const filter = state.navigationFilter;
            const isCategory = navigationFilterTypes.category === navigationType;

            if (isCategory) {
                title = state.categories.byId[id as Id].category;
                checked = title === filter.title;
            } else {
                title = navigationFilters[id as NavigationFiltersKey];
                checked = id === filter.key;
            }

            return {
                isCategory,
                title,
                checked,
            };
        },
        [id, navigationType],
    );

const NavigationPanelItemContainer = ({ id, navigationType }: NavigationPanelItemContainerProps): JSX.Element => {
    const { isCategory, title, checked } = useTodoStore(selector(id, navigationType), shallow);

    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const containerTitle = e.target.value;

            _setNavigationFilter({
                key: isCategory ? Number(id) : id,
                title: containerTitle,
                type: navigationType as NavigationFilterType,
            });
        },
        [id, navigationType, isCategory],
    );

    return (
        <NavigationIPanelIem title={title} checked={checked} handleChange={handleChange}>
            <TodosCountBadge id={id} navigationType={navigationType} />
        </NavigationIPanelIem>
    );
};

export default NavigationPanelItemContainer;
