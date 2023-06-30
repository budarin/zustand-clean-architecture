import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

const updatingTodos = new Set();
const notification = useNotification();

export async function updateTodo(todo: Todo, isMountedRef: React.MutableRefObject<boolean>): Promise<void> {
    if (!isMountedRef.current) {
        return;
    }

    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    updatingTodos.add(todo.todo_id);

    if (!oldValue) {
        notification.notifyError('Запись отсутствует в базе данных!', {
            autoClose: 2000,
        });
        return;
    }

    store.updateTodo(todo);

    await delay(3000);

    if (!isMountedRef.current) {
        store.updateTodo(oldValue);
        updatingTodos.delete(todo.todo_id);
        return;
    }

    const todoTitle = oldValue.todo.length <= 15 ? oldValue.todo : oldValue.todo.slice(0, 15) + '...';

    notification.notifyError(`Ошибка: не удалось обновить задачу "${todoTitle}" - восстанавливаем`, {
        toastId: 'server_error_todo' + todo.todo_id,
    });

    store.updateTodo(oldValue);

    updatingTodos.delete(todo.todo_id);
}
