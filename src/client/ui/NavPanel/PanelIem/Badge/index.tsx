import React from 'react';

import './index.css';

function Badge({ count }: { count: string | number }) {
    return <span className="badge">{count}</span>;
}

export default Badge;
