import { unstable_batchedUpdates } from 'react-dom';

import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

export function initStore(data: Entities) {
    let hasError = false;

    const notification = useNotification();
    const { icons, statuses, categories, todos } = data;
    const { _addIcon, _addStatus, _addCategory, _addTodo } = useTodoStore.getState();

    unstable_batchedUpdates(() => {
        icons?.forEach((icon) => {
            const result = _addIcon(icon);

            if (result.error) {
                console.error(result.error);
                hasError = true;
            }
        });

        statuses?.forEach((status) => {
            const result = _addStatus(status);

            if (result.error) {
                console.error(result.error);
                hasError = true;
            }
        });

        categories?.forEach((category) => {
            const result = _addCategory(category);

            if (result.error) {
                console.error(result.error);
                hasError = true;
            }
        });

        todos?.forEach((todo) => {
            const result = _addTodo(todo);

            if (result.error) {
                console.error(result.error);
                hasError = true;
            }
        });
    });

    hasError &&
        notification.notifyWarning(
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
