import React, { ReactNode } from 'react';

import './index.css';

type ListProps = {
    category: string;
    children: ReactNode;
};

function TodoList(props: ListProps) {
    const { category, children } = props;

    return (
        <>
            <h3>{category}</h3>
            <ul className="todoList">{children}</ul>
        </>
    );
}

export default TodoList;
