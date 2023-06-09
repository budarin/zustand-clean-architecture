import React from 'react';

import './index.css';

type TodoListHeader = {
    title: string;
    icon: string;
    count: number;
};

function TodoListHeader(props: TodoListHeader) {
    const { title, icon, count } = props;

    return (
        <div className="TodoListHeader">
            <img className="TodoListHeader-Icon" src={icon} alt="" />
            <div className="TodoListHeader-Title">
                <h3>{title}</h3>
                <span className="TodoListHeader-Count" aria-label="Количество задач в разделе">
                    задач: {count ? `${count} шт.` : 'нет'}
                </span>
            </div>
        </div>
    );
}

export default TodoListHeader;
