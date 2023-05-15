import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';

import { useTodoStore } from './store';
import { notifyError } from '../../services/notification';

export function initStore(data: EntitiesPayload) {
    let hasError = false;

    const {
        _createIcon: createIcon,
        _createStatus: createStatus,
        _createCategory: createCategory,
        _createTodo: createTodo,
    } = useTodoStore.getState();

    const { icons, statuses, categories, todos } = data;

    unstable_batchedUpdates(() => {
        icons?.forEach((icon) => {
            try {
                createIcon(icon);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
        statuses?.forEach((status) => {
            try {
                createStatus(status);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
        categories?.forEach((category) => {
            try {
                createCategory(category);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
        todos?.forEach((todo) => {
            try {
                createTodo(todo);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
    });

    hasError &&
        notifyError(
            <span>
                Во время получения данных обнаружены ошибки - возможно часть данных будет отображена не корректно.
                <br />
                Мы уже работаем над проблемой.
                <br />
                Попробуйте обновить данные позже.
            </span>,
        );

    // console.log(JSON.stringify(useTodoStore.getState(), null, 2));
}
