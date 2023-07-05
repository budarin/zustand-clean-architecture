import React from 'react';

import './index.css';
import DottedMenuIcon from '../../Icons/DottedMenuIcon/index.tsx';

type DottedMenuButton = {
    className?: string;
    onClick: () => void;
    title: string;
    expanded: boolean;
};

function DottedMenuButton(props: DottedMenuButton) {
    const { className, onClick, title, expanded } = props;

    return (
        <button className={`DottedMenuButton ${className}`} onClick={onClick} title={title} aria-expanded={expanded}>
            <DottedMenuIcon />
        </button>
    );
}

export default DottedMenuButton;
