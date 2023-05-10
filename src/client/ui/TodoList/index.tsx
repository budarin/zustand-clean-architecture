import React, { ReactNode } from 'react';

import './index.css';

type ListProps = {
    category: string;
    children: ReactNode;
};

function TodoList(props: ListProps) {
    const { category, children } = props;

    return (
        <div className="todoList">
            <h3>{category}</h3>
            <ul>{children}</ul>
        </div>
    );
}

export default TodoList;
