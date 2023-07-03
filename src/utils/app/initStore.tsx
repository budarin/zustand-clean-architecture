import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';

import { useTodoStore } from '../../domain/store/store.tsx';
import { getNotification } from '../../services/adapters/getNotification.ts';

export function initStore(data: Entities) {
    let hasError = false;

    const { todos } = data;
    const state = useTodoStore.getState();
    const { addTodo: _addTodo } = state;

    unstable_batchedUpdates(() => {
        todos?.forEach((todo) => {
            const result = _addTodo(todo);

            if (result.error !== undefined) {
                console.error(result.error);
                hasError = true;
            }
        });
    });

    if (hasError) {
        const notification = getNotification();

        notification.notifyWarning(
            <span>
                Во время получения данных обнаружены ошибки - возможно часть данных будет отображена не корректно.
                <br />
                Мы уже работаем над проблемой.
                <br />
                Попробуйте обновить данные позже.
            </span>,
        );
    }

    // console.log(JSON.stringify(useTodoStore.getState(), null, 2));
}
