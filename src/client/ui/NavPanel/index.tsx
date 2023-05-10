import React, { ReactNode } from 'react';
import './index.css';

type ListProps = {
    children: ReactNode;
};

function NavigationPanel({ children }: ListProps) {
    return <nav className="navPanel">{children}</nav>;
}

export default NavigationPanel;
