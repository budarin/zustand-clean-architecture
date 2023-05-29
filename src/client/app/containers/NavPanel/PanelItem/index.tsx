import { memo, useCallback, useState } from 'react';

import { type IconsByNameKey, iconsByName } from '../../iconsByName.ts';
import { setSelectedFilter } from '../../../useCases/setSelectedFilter.ts';
import { setSelectedCategory } from '../../../useCases/setSelectedCategory.ts';
import { getNavPanelItemProps } from '../../../selectors/getNavPanelItemProps.ts';

// components
import TodosCountBadgeContainer from '../CountBadge/index.tsx';
import NavigationIPanelIem from '../../../../ui/NavPanel/PanelIem/index.tsx';
import DottedMenuButton from '../../../../ui/MenuButton/index.tsx';

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

    const handleClick = useCallback<React.MouseEventHandler<HTMLLIElement>>(
        (event) => {
            const liElement = event.currentTarget as HTMLLIElement;
            const tagName = (event.target as HTMLElement).tagName;

            if (clickableTagNames.includes(tagName) || event.target === liElement) {
                const containerTitle = (liElement.children[1] as HTMLAnchorElement).textContent!;

                event.preventDefault();

                isCategory
                    ? setSelectedCategory(Number(id), containerTitle)
                    : setSelectedFilter(id as string, containerTitle);
            }
        },
        [id, navigationType, isCategory],
    );

    return (
        <NavigationIPanelIem title={title} icon={iconName} selected={selected} handleClick={handleClick}>
            {selected && isCategory ? (
                <DottedMenuButton title={'Отобразить меню'} onClick={handleExpan} />
            ) : (
                <TodosCountBadgeContainer id={id} navigationType={navigationType} />
            )}
        </NavigationIPanelIem>
    );
});

NavigationPanelItemContainer.displayName = 'NavigationPanelItemContainer';

export default NavigationPanelItemContainer;
