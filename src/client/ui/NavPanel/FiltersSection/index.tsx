import React, { ReactNode } from 'react';

type FilterSection = {
    children: ReactNode;
};

function FiltersSection(props: FilterSection) {
    const { children } = props;

    return (
        <li>
            <h2>Календарь</h2>
            <ul>{children}</ul>
        </li>
    );
}

export default FiltersSection;
