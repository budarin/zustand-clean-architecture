import React, { ReactNode } from 'react';
import './index.css';

type ListProps = {
    children: ReactNode;
};

function NavigationPanel(props: ListProps) {
    const { children } = props;

    return (
        <nav className="navPanel">
            <ul>{children}</ul>
        </nav>
    );
}

export default NavigationPanel;
