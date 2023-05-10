import React, { ReactNode } from 'react';

type FilterSection = {
    children: ReactNode;
};

function FiltersSection(props: FilterSection) {
    return (
        <li>
            <h2>Фильтры</h2>
            <ul>{props.children}</ul>
        </li>
    );
}

export default FiltersSection;
