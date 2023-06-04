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
        <li className="TodoListItem">
            <input
                className="TodoListItem-Checkbox"
                name="completed"
                type="checkbox"
                checked={Boolean(todo.completed)}
                onChange={handleChange}
                aria-label="Задача выполнена"
                title="Отметить задачу как выполненную"
            ></input>
            <span className="TodoListItem-Label" style={{ color: status.color }}>
                {todo.todo}
            </span>
        </li>
    );
};

export default TodoListItem;
