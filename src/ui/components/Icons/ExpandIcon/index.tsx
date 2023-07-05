import React from 'react';

type ExpandIcon = {
    className?: string;
};

function ExpandIcon(props: ExpandIcon): React.JSX.Element {
    const { className } = props;

    return (
        <svg className={className} viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g transform="matrix(1, 0, 0, -1, 0, 24.001999)">
                <path
                    d="M 8 14 L 11.962 10.002"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M 12 10.002 L 15.962 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

export default ExpandIcon;
