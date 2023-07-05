import React from 'react';

type MenuIcon = {
    className?: string;
};

function MenuIcon(props: MenuIcon): React.JSX.Element {
    const { className } = props;

    return (
        <svg className={className} width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 17H20M4 12H20M4 7H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default MenuIcon;
