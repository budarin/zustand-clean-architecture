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
            <h3 className="todoList-header">
                <img src={icon} className="todoList-header-icon" /> {category}{' '}
                <span className="todoList-header-conter">{count ? `(${count})` : null}</span>
            </h3>
            <ul className="todoList-list">{children}</ul>
        </div>
    );
}

export default TodoList;
