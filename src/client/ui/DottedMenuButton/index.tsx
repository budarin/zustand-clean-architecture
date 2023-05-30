import DottedMenuIcon from '../Icons/DottedMenuIcon';

import './index.css';

type DottedMenuButton = {
    className?: string;
    onClick: () => void;
    title: string;
    expanded: boolean;
};

function DottedMenuButton(props: DottedMenuButton) {
    const { className, onClick, title, expanded } = props;

    return (
        <button
            className={className || 'DottedMenuButton'}
            onClick={onClick}
            title={title}
            area-role="menu"
            aria-expanded={expanded}
        >
            <DottedMenuIcon />
        </button>
    );
}

export default DottedMenuButton;
