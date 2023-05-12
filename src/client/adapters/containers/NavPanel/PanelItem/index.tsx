import { shallow } from 'zustand/shallow';
import React, { MouseEventHandler, memo, useCallback } from 'react';

import { useTodoStore } from '../../../../domain/store.tsx';
import {
    NavigationFiltersKey,
    navigationFilterIcons,
    navigationFilterTypes,
    navigationFilters,
} from '../../../../domain/navigationFilter/index.ts';

// components
import TodosCountBadgeContainer from '../CountBadge/index.tsx';
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
                const category = state.categories.byId[id as Id];

                title = category.category;
                checked = title === filter.title;
                icon = state.icons.byId[category.icon_id].icon_name;
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

const clickableTagNames = ['A', 'SPAN', 'IMG'];

const NavigationPanelItemContainer = memo((props: NavigationPanelItemContainerProps): JSX.Element => {
    const { id, navigationType } = props;
    const { icon, isCategory, title, checked } = useTodoStore(selector(id, navigationType), shallow);

    const handleClick = React.useCallback<MouseEventHandler<HTMLLIElement>>(
        (event) => {
            const liElement = event.currentTarget as HTMLLIElement;
            const tagName = (event.target as HTMLElement).tagName;

            if (clickableTagNames.includes(tagName) || event.target === liElement) {
                const containerTitle = (liElement.children[1] as HTMLAnchorElement).textContent!;

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
            <TodosCountBadgeContainer id={id} navigationType={navigationType} />
        </NavigationIPanelIem>
    );
});

export default NavigationPanelItemContainer;
