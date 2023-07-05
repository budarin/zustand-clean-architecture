import React from 'react';

import CheckButton from '../CheckButton/index.tsx';
import ExpandIcon from '../../Icons/ExpandIcon/index.tsx';
import CollapseIcon from '../../Icons/CollapseIcon/index.tsx';

import './index.css';

type ExpandButton = {
    className?: string;
    isToggled: boolean;
    onClick: () => void;
    title: string;
};

function ExpandButton(props: ExpandButton) {
    const { className, isToggled, onClick, title } = props;

    return (
        <CheckButton
            className={`ExpandButton ${className}`}
            checked={isToggled}
            unCheckedIcon={<ExpandIcon />}
            checkedIcon={<CollapseIcon />}
            onClick={onClick}
            title={title}
        />
    );
}

export default ExpandButton;
