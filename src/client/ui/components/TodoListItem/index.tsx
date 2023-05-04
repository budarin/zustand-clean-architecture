import React from 'react';

import './index.css';

type TodoListItemProps = {
    todo: Todo;
    status: Status;
    handleChange: (e: any) => void;
};

const TodoListItem = ({ todo, status, handleChange }: TodoListItemProps) => {
    return (
        <li>
            <label className="todoListItem--label">
                <input
                    name="completed"
                    type="checkbox"
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
