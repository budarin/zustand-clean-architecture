import React, { ReactNode } from 'react';

import './index.css';

type ListProps = {
    category: string;
    children: ReactNode;
};

function TodoList({ category, children }: ListProps) {
    return (
        <>
            <h3>{category}</h3>
            <ul className="todoList">{children}</ul>
        </>
    );
}

export default TodoList;
