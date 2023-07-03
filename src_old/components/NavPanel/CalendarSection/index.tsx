import React, { ReactNode } from 'react';

type CalendarSection = {
    children: ReactNode;
};

function CalendarSection(props: CalendarSection) {
    const { children } = props;

    return (
        <li>
            <h2>Календарь</h2>
            <ul>{children}</ul>
        </li>
    );
}

export default CalendarSection;
