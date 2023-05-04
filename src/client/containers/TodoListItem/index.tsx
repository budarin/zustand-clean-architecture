import React, { useCallback } from 'react';

import { useTodoStore } from '../../store/index.tsx';

// components
import TodoListItem from '../../components/TodoListItem/index.tsx';

type TodoListItemContainerProps = { id: Id };

// selectors
const getTodoById = (id: Id) => useCallback((state: State) => state.todos.byId[id as Id], [id]);
const getTodoStatus = (status_id: TodoStatusId) =>
    useCallback((state: State) => state.statuses.byId[status_id as Id], [status_id]);

const TodoListItemContainer = ({ id }: TodoListItemContainerProps): JSX.Element => {
    const updateTodo = useTodoStore((s) => s.updateTodo);
    const todo = useTodoStore(getTodoById(id));
    const status = useTodoStore(getTodoStatus(todo.status_id));

    const handleChange = React.useCallback(
        (e: { target: { checked: boolean } }): void => {
            const isChecked = e.target.checked;

            updateTodo({
                id: 1,
                status_id: 1,
                todo: String(Math.random()),
                completed: isChecked,
                deleted: isChecked,
            });
        },
        [updateTodo, id],
    );

    return <TodoListItem todo={todo} status={status} handleChange={handleChange} />;
};

export default TodoListItemContainer;
