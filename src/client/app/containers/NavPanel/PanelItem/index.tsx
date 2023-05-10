import { shallow } from 'zustand/shallow';
import React, { memo, useCallback } from 'react';

import { useTodoStore } from '../../../domain/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterTypes,
    navigationFilters,
} from '../../../../../common/domain/navigationFilter/index.ts';

// components
import TodosCountBadge from '../../TodoList/ListItem/CountBadge/index.tsx';
import NavigationIPanelIem from '../../../../ui/NavPanel/PanelIem/index.tsx';

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

const NavigationPanelItemContainer = memo(({ id, navigationType }: NavigationPanelItemContainerProps): JSX.Element => {
    const { isCategory, title, checked } = useTodoStore(selector(id, navigationType), shallow);

    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            const containerTitle = e.target.value;

            useTodoStore.getState()._setNavigationFilter({
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
});

export default NavigationPanelItemContainer;
