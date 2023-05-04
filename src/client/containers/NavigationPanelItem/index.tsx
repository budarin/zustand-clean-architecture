import React, { useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodoStore } from '../../store/index.tsx';
import { type NavigationFiltersKey, navigationFilterTypes, navigationFilters } from '../../store/navigationFilter.ts';

// components
import TodosCountBadge from '../TodosCountBadge/index.tsx';
import NavigationIPanelIem from '../../components/NavigationIPanelIem';

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
    const setNavigationFilter = useTodoStore((state) => state.setNavigationFilter);
    const { isCategory, title, checked } = useTodoStore(selector(id, navigationType), shallow);

    const handleChange = React.useCallback(
        (e: { target: { value: string } }): void => {
            const title = e.target.value;

            setNavigationFilter({
                key: isCategory ? Number(id) : id,
                title,
                type: navigationType as NavigationFilterType,
            });
        },
        [setNavigationFilter],
    );

    return (
        <NavigationIPanelIem title={title} checked={checked} handleChange={handleChange}>
            <TodosCountBadge id={id} navigationType={navigationType} />
        </NavigationIPanelIem>
    );
};

export default NavigationPanelItemContainer;
