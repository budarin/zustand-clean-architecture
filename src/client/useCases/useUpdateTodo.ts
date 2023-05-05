import { toast } from 'react-toastify';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../common/promises/delay';

type UseUpdateTodo = [
    state: {
        inProgress: boolean;
        error: string | undefined;
    },
    update: Dispatch<SetStateAction<Todo | undefined>>,
];

export function useUpdateTodo(): UseUpdateTodo {
    const [todo, setTodo] = useState<Todo>();
    const [error, setError] = useState<string>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        const doDelete = async () => {
            if (todo === undefined) {
                return;
            }

            setInProgress(true);

            const { todos, updateTodo } = useTodoStore.getState();
            const oldValue = todos.byId[todo.id];

            if (!oldValue) {
                setError('Нет ткой записи!');
                setInProgress(false);
                toast.error('Запись отсутствует в базе данных!', { autoClose: 2000 });
                return;
            }

            updateTodo(todo);

            toast.info('Тодо обновлен', { autoClose: 1000 });

            await delay(3000);

            toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

            updateTodo(oldValue);

            setInProgress(false);
        };

        doDelete();
    }, [todo]);

    return [{ inProgress, error }, setTodo];
}
