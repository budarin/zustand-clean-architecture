import React from 'react';

import './index.css';

function Badge(props: { count: string | number }) {
    const { count } = props;

    return <span className="badge">{count}</span>;
}

export default Badge;
