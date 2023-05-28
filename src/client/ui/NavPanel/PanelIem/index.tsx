import React, { MouseEventHandler, ReactNode } from 'react';

import { cn } from '../../classNames.ts';

import './index.css';

type NavigationIPanelIem = {
    title: string;
    icon: string;
    selected: boolean;
    handleClick: MouseEventHandler<HTMLLIElement>;
    children: ReactNode;
};

const navItem = cn('NavItem');

const NavigationIPanelIem = (props: NavigationIPanelIem) => {
    const { title, icon, selected, handleClick, children } = props;
    const itemClass = navItem({ selected });

    return (
        <li className={itemClass} onClick={handleClick}>
            <img className="NavItem-Icon" src={icon} alt="" />
            <a className="NavItem-Link" href="#">
                {title}
            </a>
            {children}
        </li>
    );
};

export default NavigationIPanelIem;
