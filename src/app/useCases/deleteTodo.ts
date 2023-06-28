import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

const notification = useNotification();

export async function deleteTodo(todo: Todo, isMountedRef: React.MutableRefObject<boolean>): Promise<void> {
    if (!isMountedRef.current) {
        return;
    }

    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    store.deleteTodo(todo);

    // toast.info('Тодо обновлен', { autoClose: 1000 });

    await delay(3000);

    if (!isMountedRef.current) {
        store.updateTodo(oldValue);
        return;
    }

    const todoTitle = todo.todo.length <= 10 ? todo.todo : todo.todo.slice(0, 10) + '...';

    notification.notifyError(`Ошибка: не удалось удалить "${todoTitle}" - восстанавливаем`, {
        toastId: 'delete_todo' + todo.todo_id,
    });

    store.updateTodo(oldValue);
}
