import React, { useCallback } from 'react';

import { useTodoStore } from '../../../domain/store.ts';
import { useUpdateTodo } from '../../../useCases/useUpdateTodo.ts';

// components
import TodoListItem from '../../components/TodoListItem/index.tsx';

type TodoListItemContainerProps = { id: Id };

// selectors
const getTodoById = (id: Id) => useCallback((state: State) => state.todos.byId[id as Id], [id]);
const getTodoStatus = (status_id: TodoStatusId) =>
    useCallback((state: State) => state.statuses.byId[status_id as Id], [status_id]);

const TodoListItemContainer = ({ id }: TodoListItemContainerProps): JSX.Element => {
    const todo = useTodoStore(getTodoById(id));
    const status = useTodoStore(getTodoStatus(todo.status_id));
    const [{ inProgress, error }, updateTodo] = useUpdateTodo();

    const handleChangeCheckBox = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            e.preventDefault();

            const isChecked = e.target.checked;
            updateTodo({
                id: 1,
                status_id: 1,
                todo: String(Math.random()),
                completed: isChecked,
                deleted: isChecked,
            });
        },
        [id],
    );

    return <TodoListItem todo={todo} status={status} handleChange={handleChangeCheckBox} />;
};

export default TodoListItemContainer;
