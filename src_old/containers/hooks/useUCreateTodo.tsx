import React, { useEffect, useState } from 'react';

import { createTodo } from '../../../src/app/useCases/createTodo.ts';
import { useNotification } from '../../../src/services/adapters/useNotification.ts';

type UseCreateTodo = [inProgress: boolean, createTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>];

export function useUCreateTodo(): UseCreateTodo {
    const notification = useNotification();

    const [todo, setTodo] = useState<Todo>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        let mounted = true;

        const doCreate = async () => {
            if (todo === undefined || mounted === false) {
                return;
            }

            setInProgress(true);

            try {
                await createTodo(todo);
            } catch (error) {
                notification.notifyError(`Ошибка: ${(error as Error).message}`, {
                    toastId: 'create_todo_error' + todo.todo,
                });
            } finally {
                setInProgress(false);
            }
        };

        doCreate();

        return () => {
            mounted = false;
        };
    }, [todo]);

    return [inProgress, setTodo];
}
