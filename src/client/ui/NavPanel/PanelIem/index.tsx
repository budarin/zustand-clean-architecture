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
    const imgClass = navItem('image');
    const linkClass = navItem('link');
    const badgeClass = navItem('badge');

    return (
        <li className={itemClass} onClick={handleClick}>
            <img src={icon} className={imgClass} />
            <a href="#" className={linkClass}>
                {title}
            </a>
            <span className={badgeClass}>{children}</span>
        </li>
    );
};

export default NavigationIPanelIem;
