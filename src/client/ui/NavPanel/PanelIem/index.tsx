import React from 'react';

import { cn } from '../../classNames.ts';

import './index.css';

type NavigationIPanelIem = {
    title: string;
    icon: string;
    selected: boolean;
    handleClick: React.MouseEventHandler<HTMLLIElement>;
    children: React.ReactNode;
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
