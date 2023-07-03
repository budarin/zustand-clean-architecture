import React, { ReactNode } from 'react';

import './index.css';

type NavigationPanel = {
    isOpen: boolean;
    children: ReactNode;
};

function NavigationPanel(props: NavigationPanel) {
    const { isOpen, children } = props;

    return (
        <nav className="NavPanel" style={{ display: isOpen ? 'block' : 'none' }}>
            <ul>{children}</ul>
        </nav>
    );
}

export default NavigationPanel;
