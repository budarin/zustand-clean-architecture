import DottedMenuIcon from '../Icons/DottedMenuIcon';

import './index.css';

type DottedMenuButton = {
    className?: string;
    onClick: () => void;
    title: string;
};

function DottedMenuButton(props: DottedMenuButton) {
    const { className, onClick, title } = props;

    return (
        <button className={className || 'DottedMenuButton'} onClick={onClick} title={title}>
            <DottedMenuIcon />
        </button>
    );
}

export default DottedMenuButton;
