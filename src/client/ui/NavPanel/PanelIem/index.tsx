import React, { MouseEventHandler, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './index.css';

type NavigationIPanelIemProps = {
    title: string;
    checked: boolean;
    handleClick: MouseEventHandler<HTMLLIElement>;
    children: ReactNode;
};

const navItem = cn('navPanel-item');

const NavigationIPanelIem = ({ title, checked, handleClick, children }: NavigationIPanelIemProps) => {
    const itemClass = navItem({ selected: checked });

    return (
        <li className={itemClass} onClick={handleClick} data-selected={checked}>
            <a href="#">{title}</a>
            {children}
        </li>
    );
};

export default NavigationIPanelIem;
