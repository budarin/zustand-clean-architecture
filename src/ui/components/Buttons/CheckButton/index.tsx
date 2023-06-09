import React from 'react';
import './index.css';

type CheckButton = {
    className?: string;
    checked: boolean;
    unCheckedIcon: JSX.Element;
    checkedIcon: JSX.Element;
    onClick: (event: unknown) => void;
    title: string;
};

function CheckButton(props: CheckButton): React.JSX.Element {
    const { className, checked, unCheckedIcon, checkedIcon, onClick, title } = props;

    return (
        <button className={`CheckButton ${className}`} aria-expanded={checked} onClick={onClick} title={title}>
            {checked ? checkedIcon : unCheckedIcon}
        </button>
    );
}

export default CheckButton;
