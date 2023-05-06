import { toast } from 'react-toastify';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useTodoStore } from '../domain/store';
import { delay } from '../../../common/promises/delay';

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
                toast.error(`${todo.id}: Запись еще не обновлена на сервере!`, {
                    autoClose: 2000,
                    toastId: 'updating_todo' + todo.id,
                });
                return;
            }

            updatingTodos.add(todo.id);
            setInProgress(true);

            const store = useTodoStore.getState();
            const oldValue = store.todos.byId[todo.id];

            if (!oldValue) {
                setError('Нет ткой записи!');
                setInProgress(false);
                toast.error('Запись отсутствует в базе данных!', {
                    autoClose: 2000,
                });
                return;
            }

            store._updateTodo(todo);

            // toast.info('Тодо обновлен', { autoClose: 1000 });

            await delay(3000);

            toast.error(`${todo.id}: Упс! вышла ошибочка - восстанавливаем`, {
                toastId: 'server_error_todo' + todo.id,
            });

            store._updateTodo(oldValue);

            setInProgress(false);
            updatingTodos.delete(todo.id);
        };

        todo && doDelete();
    }, [todo]);

    return [{ inProgress, error }, setTodo];
}
