import React, { MouseEventHandler, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './index.css';

type NavigationIPanelIem = {
    title: string;
    icon: string;
    checked: boolean;
    handleClick: MouseEventHandler<HTMLLIElement>;
    children: ReactNode;
};

const navItem = cn('navPanel-item');

const NavigationIPanelIem = (props: NavigationIPanelIem) => {
    const { title, icon, checked, handleClick, children } = props;
    const itemClass = navItem({ selected: checked });

    return (
        <li className={itemClass} onClick={handleClick}>
            <img className="navPanel-item-icon" src={icon} alt="" />
            <a className="navPanel-item-link" href="#">
                {title}
            </a>
            {children}
        </li>
    );
};

export default NavigationIPanelIem;
