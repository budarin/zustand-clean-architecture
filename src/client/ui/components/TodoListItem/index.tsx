import React from 'react';

import './index.css';

type TodoListItemProps = {
    todo: Todo;
    status: Status;
    disabled: boolean;
    handleChange: (e: any) => void;
};

const TodoListItem = ({ todo, status, disabled, handleChange }: TodoListItemProps) => {
    return (
        <li>
            <label className="todoListItem--label">
                <input
                    name="completed"
                    type="checkbox"
                    disabled={disabled}
                    checked={todo.completed}
                    onChange={handleChange}
                    className="todoListItem-checkbox"
                ></input>{' '}
                <span style={{ color: status.color }}>{todo.todo}</span>
            </label>
        </li>
    );
};

export default TodoListItem;
