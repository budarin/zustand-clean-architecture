import { shallow } from 'zustand/shallow';
import React, { MouseEventHandler, memo, useCallback } from 'react';

import { useTodoStore } from '../../../domain/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../../../../common/domain/navigationFilter/index.ts';

// components
import TodosCountBadge from '../../TodoList/CountBadge/index.tsx';
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
            let icon = '';

            const filter = state.navigationFilter;
            const isCategory = navigationFilterTypes.category === navigationType;

            if (isCategory) {
                title = state.categories.byId[id as Id].category;
                checked = title === filter.title;
                icon = state.icons.byId[id as Id].icon_name;
            } else {
                title = navigationFilters[id as NavigationFiltersKey];
                checked = id === filter.key;
                icon = navigationFilterIcons[id as NavigationFiltersKey];
            }

            return {
                isCategory,
                title,
                checked,
                icon,
            };
        },
        [id, navigationType],
    );

const NavigationPanelItemContainer = memo((props: NavigationPanelItemContainerProps): JSX.Element => {
    const { id, navigationType } = props;
    const { icon, isCategory, title, checked } = useTodoStore(selector(id, navigationType), shallow);

    const handleClick = React.useCallback<MouseEventHandler<HTMLLIElement>>(
        (event) => {
            const liElement = event.currentTarget as HTMLLIElement;
            const tagName = (event.target as HTMLElement).tagName;

            if (tagName === 'A' || tagName === 'SPAN' || event.target === liElement) {
                const containerTitle = (liElement.children[0] as HTMLAnchorElement).textContent!;

                event.preventDefault();

                useTodoStore.getState()._setNavigationFilter({
                    key: isCategory ? Number(id) : id,
                    title: containerTitle,
                    type: navigationType as NavigationFilterType,
                });
            }
        },
        [id, navigationType, isCategory],
    );

    return (
        <NavigationIPanelIem title={title} icon={icon} checked={checked} handleClick={handleClick}>
            <TodosCountBadge id={id} navigationType={navigationType} />
        </NavigationIPanelIem>
    );
});

export default NavigationPanelItemContainer;
