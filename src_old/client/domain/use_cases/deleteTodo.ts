import * as notification from '../../../../src/infrastructure/services/Notification/index.ts';

import { useTodoStore } from '../entities/store.tsx';
import { delay } from '../../../common/utils/promises/delay.ts';

export async function deleteTodo(todo: Todo): Promise<void> {
    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    store._deleteTodo(todo.todo_id);

    // toast.info('Тодо обновлен', { autoClose: 1000 });

    await delay(3000);

    const todoTitle = todo.todo.length <= 10 ? todo.todo : todo.todo.slice(0, 10) + '...';

    notification.notifyError(`Ошибка: не удалось удалить "${todoTitle}" - восстанавливаем`, {
        toastId: 'delete_todo' + todo.todo_id,
    });

    store._updateTodo(oldValue);
}
