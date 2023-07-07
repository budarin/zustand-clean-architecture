import React from 'react';

import './index.css';

type CheckButton = {
    className?: string;
    checked: boolean;
    unCheckedIcon: JSX.Element;
    checkedIcon: JSX.Element;
    onClick: (event: any) => void;
    title: string;
};

const CheckButton: React.FC<CheckButton> = (props) => {
    const { className, checked, unCheckedIcon, checkedIcon, onClick, title } = props;

    return (
        <button className={`CheckButton ${className}`} aria-expanded={checked} onClick={onClick} title={title}>
            {checked ? checkedIcon : unCheckedIcon}
        </button>
    );
};

export default CheckButton;
