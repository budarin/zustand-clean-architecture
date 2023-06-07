import React, { memo, useCallback } from 'react';

import { updateTodo } from '../../../../../../src/domain/useCases/updateTodo.ts';
import { getTodoById } from '../../../../../../src/domain/selectors/getTodoById.ts';
import { getStatusByStatusId } from '../../../../../../src/domain/selectors/getStatusByStatusId.ts';

// components
import TodoListItem from '../../../../ui/TodoList/TodoListItem/index.tsx';

type TodoListItemContainer = { id: Id };

const TodoListItemContainer = memo((props: TodoListItemContainer): JSX.Element => {
    const { id } = props;
    const todo = getTodoById(id);
    const status = getStatusByStatusId(todo.status_id);

    const handleChangeCheckBox = useCallback(
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
