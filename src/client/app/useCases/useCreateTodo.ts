import { toast } from 'react-toastify';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

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

                store._createTodo(todo);
            } catch (error) {
                const errorMessage = `Упс! Не удалось создать ${todo.todo.slice(10)}...`;

                toast.error(errorMessage, {
                    toastId: 'create_todo_error' + todo.todo,
                });

                setInProgress(false);
            }
        };

        todo && doCreate();
    }, [todo]);

    return [inProgress, setTodo];
}
