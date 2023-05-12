import React, { ReactNode, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import './index.css';

type ListProps = {
    isOpen: boolean;
    children: ReactNode;
};

function NavigationPanel(props: ListProps) {
    const { isOpen, children } = props;

    return (
        <nav className="navPanel" style={{ display: isOpen ? 'block' : 'none' }}>
            <ul>{children}</ul>
        </nav>
    );
}

export default NavigationPanel;
