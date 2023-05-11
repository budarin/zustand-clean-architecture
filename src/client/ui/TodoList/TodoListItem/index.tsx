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
        <li className="todoList-list-item">
            <label className="todoList-list-item-label">
                <input
                    name="completed"
                    type="checkbox"
                    checked={Boolean(todo.completed)}
                    onChange={handleChange}
                    className="todoList-list-item-checkbox"
                ></input>{' '}
                <span style={{ color: status.color }}>{todo.todo}</span>
            </label>
        </li>
    );
};

export default TodoListItem;
