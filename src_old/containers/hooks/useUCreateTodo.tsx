import React, { useEffect, useState } from 'react';

import { createTodo } from '../../../src/app/useCases/createTodo.ts';
import { useNotification } from '../../../src/app/serviceAdapters/useNotification.ts';

const notification = useNotification();

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

            try {
                createTodo(todo);
            } catch (error) {
                notification.notifyError(`Ошибка: ${(error as Error).message}`, {
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
