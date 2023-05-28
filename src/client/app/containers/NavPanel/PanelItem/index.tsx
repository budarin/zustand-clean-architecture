import { type MouseEventHandler, memo, useCallback, useState } from 'react';

import { type IconsByNameKey, iconsByName } from '../../iconsByName.ts';
import { setNavigationFilter } from '../../../useCases/setNavigationFilter.ts';
import { getNavPanelItemProps } from '../../../selectors/getNavPanelItemProps.ts';
import { createFilterNavFilter } from '../../../action_creators/createFilterNavFilter.ts';
import { createCategoryNavFilter } from '../../../action_creators/createCategoryNavFilter.ts';

// components
import TodosCountBadgeContainer from '../CountBadge/index.tsx';
import ExpandButton from '../../../../ui/ExpandButton/index.tsx';
import NavigationIPanelIem from '../../../../ui/NavPanel/PanelIem/index.tsx';

type NavigationPanelItemContainer = {
    id: NavigationFilterKey;
    navigationType: NavigationFilterType;
};

const clickableTagNames = ['A', 'SPAN', 'IMG'];

const NavigationPanelItemContainer = memo((props: NavigationPanelItemContainer): JSX.Element => {
    const { id, navigationType } = props;

    const [expanded, setExpanded] = useState(false);
    const { icon, isCategory, title, selected } = getNavPanelItemProps(id, navigationType);
    const iconName = iconsByName[icon as IconsByNameKey];

    const handleExpan = useCallback(() => {
        setExpanded((state) => !state);
    }, []);

    const handleClick = useCallback<MouseEventHandler<HTMLLIElement>>(
        (event) => {
            const liElement = event.currentTarget as HTMLLIElement;
            const tagName = (event.target as HTMLElement).tagName;

            if (clickableTagNames.includes(tagName) || event.target === liElement) {
                const containerTitle = (liElement.children[1] as HTMLAnchorElement).textContent!;

                event.preventDefault();

                const filter = isCategory
                    ? createCategoryNavFilter(Number(id), containerTitle)
                    : createFilterNavFilter(id as string, containerTitle);

                setNavigationFilter(filter);
            }
        },
        [id, navigationType, isCategory],
    );

    return (
        <NavigationIPanelIem title={title} icon={iconName} selected={selected} handleClick={handleClick}>
            {selected && isCategory ? (
                <ExpandButton
                    isToggled={expanded}
                    title={`${expanded ? 'Свернуть' : 'Показать'} меню`}
                    onClick={handleExpan}
                />
            ) : (
                <TodosCountBadgeContainer id={id} navigationType={navigationType} />
            )}
        </NavigationIPanelIem>
    );
});

NavigationPanelItemContainer.displayName = 'NavigationPanelItemContainer';

export default NavigationPanelItemContainer;
