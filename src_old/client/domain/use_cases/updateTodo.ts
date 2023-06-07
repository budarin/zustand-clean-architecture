import * as notification from '../../../../src/infrastructure/services/Notification/index.ts';

import { useTodoStore } from '../entities/store.tsx';
import { delay } from '../../../common/utils/promises/delay.ts';

const updatingTodos = new Set();

export async function updateTodo(todo: Todo): Promise<void> {
    updatingTodos.add(todo.todo_id);

    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    if (!oldValue) {
        notification.notifyError('Запись отсутствует в базе данных!', {
            autoClose: 2000,
        });
        return;
    }

    store._updateTodo(todo);

    await delay(3000);

    const todoTitle = oldValue.todo.length <= 15 ? oldValue.todo : oldValue.todo.slice(0, 15) + '...';

    notification.notifyError(`Ошибка: не удалось обновить задачу "${todoTitle}" - восстанавливаем`, {
        toastId: 'server_error_todo' + todo.todo_id,
    });

    store._updateTodo(oldValue);

    updatingTodos.delete(todo.todo_id);
}
