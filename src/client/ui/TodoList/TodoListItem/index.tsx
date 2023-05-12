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
            <div className="todoListItem-container">
                <label className="todoListItem-label">
                    <input
                        name="completed"
                        type="checkbox"
                        checked={Boolean(todo.completed)}
                        onChange={handleChange}
                        className="todoListItem-checkbox"
                    ></input>{' '}
                    <span style={{ color: status.color }}>{todo.todo}</span>
                </label>
            </div>
        </li>
    );
};

export default TodoListItem;
