import { unstable_batchedUpdates } from 'react-dom';

import { useTodoStore } from './store';
import { notifyWarning } from '../../services/Notification';

export function initStore(data: EntitiesPayload) {
    let hasError = false;
    const { icons, statuses, categories, todos } = data;
    const { _addIcon, _addStatus, _addCategory, _addTodo } = useTodoStore.getState();

    unstable_batchedUpdates(() => {
        icons?.forEach((icon) => {
            try {
                _addIcon(icon);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
        statuses?.forEach((status) => {
            try {
                _addStatus(status);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
        categories?.forEach((category) => {
            try {
                _addCategory(category);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
        todos?.forEach((todo) => {
            try {
                _addTodo(todo);
            } catch (error) {
                console.error(error);
                hasError = true;
            }
        });
    });

    hasError &&
        notifyWarning(
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
