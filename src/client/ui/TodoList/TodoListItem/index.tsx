import React from 'react';

import './index.css';

type TodoListItemProps = {
    todo: Todo;
    status: Status;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoListItem = (props: TodoListItemProps) => {
    const { todo, status, handleChange } = props;

    return (
        <li className="todoListItem">
            <input
                name="completed"
                type="checkbox"
                checked={Boolean(todo.completed)}
                onChange={handleChange}
                className="todoListItem-checkbox"
            ></input>
            <span className="todoListItem-label" style={{ color: status.color }}>
                {todo.todo}
            </span>
        </li>
    );
};

export default TodoListItem;
