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

const updatingTodos = new Set();

export function useUpdateTodo(): UseUpdateTodo {
    const [todo, setTodo] = useState<Todo>();
    const [error, setError] = useState<string>();
    const [inProgress, setInProgress] = useState<boolean>(false);

    useEffect(() => {
        const doDelete = async () => {
            if (todo === undefined) {
                return;
            }

            if (updatingTodos.has(todo.id)) {
                // так же можно подмешивать в todo "inProgres" в  state для предотвращения повторных попыток
                // изменить состояние пока оно еще не изменено на сервере
                toast.error('Запись еще не обновлена на сервере!', { autoClose: 2000 });
                return;
            }

            updatingTodos.add(todo.id);
            setInProgress(true);

            const { todos, _updateTodo } = useTodoStore.getState();
            const oldValue = todos.byId[todo.id];

            if (!oldValue) {
                setError('Нет ткой записи!');
                setInProgress(false);
                toast.error('Запись отсутствует в базе данных!', { autoClose: 2000 });
                return;
            }

            _updateTodo(todo);

            // toast.info('Тодо обновлен', { autoClose: 1000 });

            await delay(3000);

            toast.error('Упс! вышла ошибочка - восстанавливаем', { autoClose: 2000 });

            _updateTodo(oldValue);

            setInProgress(false);
            updatingTodos.delete(todo.id);
        };

        doDelete();
    }, [todo]);

    return [{ inProgress, error }, setTodo];
}
