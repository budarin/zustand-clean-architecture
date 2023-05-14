import React from 'react';

type ToggleButton = {
    className: string;
    isToggled: boolean;
    unToggledImg: JSX.Element;
    toggledImg: JSX.Element;
    onClick: () => void;
    title: string;
};

function ToggleButton(props: ToggleButton) {
    const { className, isToggled, unToggledImg, toggledImg, onClick, title } = props;

    return (
        <button className={className} aria-expanded={isToggled} onClick={onClick} title={title}>
            {isToggled ? unToggledImg : toggledImg}
        </button>
    );
}

export default ToggleButton;
