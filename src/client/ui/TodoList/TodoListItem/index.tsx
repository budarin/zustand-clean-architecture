import React from 'react';

import './index.css';

type TodoListItem = {
    todo: Todo;
    status: Status;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoListItem = (props: TodoListItem) => {
    const { todo, status, handleChange } = props;

    return (
        <li className="todoListItem">
            <input
                className="todoListItem-checkbox"
                name="completed"
                type="checkbox"
                checked={Boolean(todo.completed)}
                onChange={handleChange}
                aria-label="Задача выполнена"
            ></input>
            <span className="todoListItem-label" style={{ color: status.color }}>
                {todo.todo}
            </span>
        </li>
    );
};

export default TodoListItem;
