import React, { ReactNode } from 'react';

type UtilitySection = {
    children: ReactNode;
};

function UtilitySection(props: UtilitySection) {
    const { children } = props;

    return (
        <li>
            <h2>Утилиты</h2>
            <ul>{children}</ul>
        </li>
    );
}

export default UtilitySection;
