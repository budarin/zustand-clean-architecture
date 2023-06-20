import React, { useEffect, useRef, useState } from 'react';

import { createTodo } from '../../../src/app/useCases/createTodo.ts';
import { useNotification } from '../../../src/services/adapters/useNotification.ts';

type UseCreateTodo = [inProgress: boolean, createTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>];

export function useUCreateTodo(): UseCreateTodo {
    const notification = useNotification();

    const isMountedRef = useRef(true);
    const [todo, setTodo] = useState<Todo>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        isMountedRef.current = true;

        const doCreate = async () => {
            if (todo === undefined || isMountedRef.current === false) {
                return;
            }

            setInProgress(true);

            try {
                await createTodo(todo, isMountedRef);
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
            isMountedRef.current = false;
        };
    }, [todo]);

    return [inProgress, setTodo];
}
