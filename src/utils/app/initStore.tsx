import { unstable_batchedUpdates } from 'react-dom';

import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

export function initStore(data: Entities) {
    let hasError = false;

    const { todos } = data;
    const { _addTodo } = useTodoStore.getState();

    unstable_batchedUpdates(() => {
        todos?.forEach((todo) => {
            const result = _addTodo(todo);

            if (result.error) {
                console.error(result.error);
                hasError = true;
            }
        });
    });

    if (hasError) {
        const notification = useNotification();

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
