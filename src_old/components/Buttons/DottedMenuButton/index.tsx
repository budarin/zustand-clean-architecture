import React, { FC } from 'react';

import DottedMenuIcon from '../../Icons/DottedMenuIcon';

import './index.css';

type DottedMenuButton = {
    className?: string;
    onClick: () => void;
    title: string;
    expanded: boolean;
};

const DottedMenuButton: FC<DottedMenuButton> = (props) => {
    const { className, onClick, title, expanded } = props;

    return (
        <button className={`DottedMenuButton ${className}`} onClick={onClick} title={title} aria-expanded={expanded}>
            <DottedMenuIcon />
        </button>
    );
};

export default DottedMenuButton;
