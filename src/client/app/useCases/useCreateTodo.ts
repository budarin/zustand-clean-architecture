import React, { useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { notifyError } from '../../services/notification';
import { delay } from '../../../common/utils/promises/delay';

type UseCreateTodo = [inProgress: boolean, createTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>];

export function useUCreateTodo(): UseCreateTodo {
    const [todo, setTodo] = useState<Todo>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        const doCreate = async () => {
            if (todo === undefined) {
                return;
            }

            setInProgress(true);

            const store = useTodoStore.getState();

            try {
                // fetch
                await delay(3000);

                const numbers = Object.keys(store.todos.byId).map(Number);

                const newTodoId = Math.max(...numbers) + 1;
                todo['todo_id'] = newTodoId;

                store._addTodo(todo);
            } catch (error) {
                notifyError(`Ошибка: ${(error as Error).message}`, {
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
