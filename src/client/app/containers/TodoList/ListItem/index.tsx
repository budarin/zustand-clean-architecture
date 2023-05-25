import React, { memo, useCallback } from 'react';

import { useTodoStore } from '../../../domain/store.tsx';
import { updateTodo } from '../../../useCases/updateTodo.ts';

// components
import TodoListItem from '../../../../ui/TodoList/TodoListItem/index.tsx';

type TodoListItemContainer = { id: Id };

// selectors
const getTodoById = (id: Id) => useCallback((state: TodosState) => state.todos.byId[id as Id], [id]);
const getTodoStatus = (status_id: TodoStatusId) =>
    useCallback((state: TodosState) => state.statuses.byId[status_id as Id], [status_id]);

const TodoListItemContainer = memo((props: TodoListItemContainer): JSX.Element => {
    const { id } = props;
    const todo = useTodoStore(getTodoById(id));
    const status = useTodoStore(getTodoStatus(todo.status_id));

    const handleChangeCheckBox = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>): void => {
            e.preventDefault();

            const isChecked = e.target.checked;
            updateTodo({
                todo_id: 3,
                status_id: 1,
                todo: String(Math.random()),
                completed: isChecked,
                deleted: isChecked,
            });
        },
        [id],
    );

    return <TodoListItem todo={todo} status={status} handleChange={handleChangeCheckBox} />;
});

TodoListItemContainer.displayName = 'TodoListItemContainer';

export default TodoListItemContainer;
