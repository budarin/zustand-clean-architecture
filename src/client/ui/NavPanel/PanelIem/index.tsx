import React, { ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './index.css';

type NavigationIPanelIemProps = {
    title: string;
    checked: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    children: ReactNode;
};

const navItem = cn('navPanel-item');

const NavigationIPanelIem = ({ title, checked, handleChange, children }: NavigationIPanelIemProps) => {
    const itemClass = navItem({ selected: checked });

    return (
        <div className={itemClass}>
            <label>
                <input
                    type="radio"
                    name="navlist"
                    value={title}
                    checked={checked}
                    onChange={handleChange}
                    className="navPanel-item__radio"
                />
                {title}
            </label>
            {children}
        </div>
    );
};

export default NavigationIPanelIem;
