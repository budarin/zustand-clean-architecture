import React, { ReactNode } from 'react';

type UtilitySection = {
    children: ReactNode;
};

function UtilitySection(props: UtilitySection) {
    return (
        <li>
            <h2>Утилиты</h2>
            <ul>{props.children}</ul>
        </li>
    );
}

export default UtilitySection;
