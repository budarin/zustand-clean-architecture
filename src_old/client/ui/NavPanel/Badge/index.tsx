import React from 'react';

import './index.css';

function Badge(props: { count: string | number }) {
    const { count } = props;

    return (
        <div className="Badge">
            <span title={`Количество задач: ${count} шт.`}>{count}</span>
        </div>
    );
}

export default Badge;
