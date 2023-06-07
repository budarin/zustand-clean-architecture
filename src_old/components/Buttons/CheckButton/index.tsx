import { FC } from 'react';

import './index.css';

type CheckButton = {
    className?: string;
    checked: boolean;
    unCheckedIcon: JSX.Element;
    checkedIcon: JSX.Element;
    onClick: (event: any) => void;
    title: string;
};

const CheckButton: FC<CheckButton> = (props) => {
    const { className, checked, unCheckedIcon, checkedIcon, onClick, title } = props;

    return (
        <button
            className={`CheckButton ${className}`}
            area-role="menu"
            aria-expanded={checked}
            onClick={onClick}
            title={title}
        >
            {checked ? checkedIcon : unCheckedIcon}
        </button>
    );
};

export default CheckButton;
