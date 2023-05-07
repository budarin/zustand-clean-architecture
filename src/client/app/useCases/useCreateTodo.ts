import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';
import { notifyError } from '../../services/notification';

type UseCreateTodo = [inProgress: boolean, createTodo: Dispatch<SetStateAction<Todo | undefined>>];

export function useUCreateTodo(): UseCreateTodo {
    const [todo, setTodo] = useState<Todo>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        const doCreate = async () => {
            if (todo === undefined) {
                return;
            }

            try {
                setInProgress(true);
                const store = useTodoStore.getState();
                await delay(3000);

                const numbers = Object.keys(store.todos.byId).map(Number);
                const newTodoId = Math.max(...numbers) + 1;
                store._createTodo({ ...todo, todo_id: newTodoId });
            } catch (error) {
                notifyError(`Упс! Не удалось создать ${todo.todo.slice(10)}...`, {
                    toastId: 'create_todo_error' + todo.todo,
                });
            } finally {
                setInProgress(false);
            }
        };

        todo && doCreate();
    }, [todo]);

    return [inProgress, setTodo];
}
