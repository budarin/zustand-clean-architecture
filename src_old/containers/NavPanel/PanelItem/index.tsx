import { memo, useCallback, useState } from 'react';

import { IconsByNameKey, iconsByName } from '../../iconsByName.ts';
import { setSelectedFilter } from '../../../../src/app/useCases/setSelectedFilter.ts';
import { setSelectedCategory } from '../../../../src/app/useCases/setSelectedCategory.ts';
import { getNavigationPanelItemProps } from '../../../../src/app/selectors/getNavigationPanelItemProps.ts';

// components
import TodosCountBadgeContainer from '../CountBadge/index.tsx';
import NavigationIPanelIem from '../../../components/NavPanel/PanelIem/index.tsx';
import DottedMenuButton from '../../../components/Buttons/DottedMenuButton/index.tsx';

type NavigationPanelItemContainer = {
    id: NavigationFilterKey;
    navigationType: NavigationFilterType;
};

const clickableTagNames = ['A', 'SPAN', 'IMG'];

const NavigationPanelItemContainer = memo((props: NavigationPanelItemContainer): JSX.Element => {
    const { id, navigationType } = props;

    const [expanded, setExpanded] = useState(false);
    const navPanelItemProps = getNavigationPanelItemProps(id, navigationType);

    // если нет данных для элемента - не рисуем его
    if (!navPanelItemProps) {
        return <></>;
    }

    const { icon, isCategory, title, selected } = navPanelItemProps;
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
                <DottedMenuButton
                    expanded={expanded}
                    className="NavItem__Button"
                    title={(expanded ? 'Скрыть' : 'Отобразить') + ' меню'}
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
