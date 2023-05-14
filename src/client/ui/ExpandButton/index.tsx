import React from 'react';

import CheckButton from '../CheckButton';
import ExpandIcon from '../Icons/ExpandIcon';
import CollapseIcon from '../Icons/CollapseIcon';

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
            className={className || 'expandButton'}
            checked={isToggled}
            unCheckedIcon={<ExpandIcon />}
            checkedIcon={<CollapseIcon />}
            onClick={onClick}
            title={title}
        />
    );
}

export default ExpandButton;
