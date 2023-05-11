import React, { MouseEventHandler, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './index.css';

type NavigationIPanelIemProps = {
    title: string;
    icon: string;
    checked: boolean;
    handleClick: MouseEventHandler<HTMLLIElement>;
    children: ReactNode;
};

const navItem = cn('navPanel-item');

const NavigationIPanelIem = (props: NavigationIPanelIemProps) => {
    const { title, icon, checked, handleClick, children } = props;
    const itemClass = navItem({ selected: checked });

    return (
        <li className={itemClass} onClick={handleClick} data-selected={checked}>
            <img src={icon} />
            <a href="#">{title}</a>
            {children}
        </li>
    );
};

export default NavigationIPanelIem;
