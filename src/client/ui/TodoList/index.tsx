import React, { ReactNode } from 'react';

import './index.css';

type ListProps = {
    category: string;
    icon: string;
    count: number;
    children: ReactNode;
};

function TodoList(props: ListProps) {
    const { category, icon, count, children } = props;

    return (
        <div className="todoList">
            <h3>
                <img src={icon} /> {category} <span>{count ? `(${count})` : null}</span>
            </h3>
            <ul>{children}</ul>
        </div>
    );
}

export default TodoList;
