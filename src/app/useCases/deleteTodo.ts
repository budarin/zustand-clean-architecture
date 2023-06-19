import { delay } from '../../utils/promises/delay.ts';
import { useTodoStore } from '../../domain/store/store.tsx';
import { useNotification } from '../../services/adapters/useNotification.ts';

export async function deleteTodo(todo: Todo, isMountedRef: React.MutableRefObject<boolean>): Promise<void> {
    const notification = useNotification();
    const store = useTodoStore.getState();
    const oldValue = store.todos.byId[todo.todo_id];

    store._deleteTodo(todo.todo_id);

    // toast.info('Тодо обновлен', { autoClose: 1000 });

    await delay(3000);

    if (isMountedRef.current === false) {
        store._updateTodo(oldValue);
        return;
    }

    const todoTitle = todo.todo.length <= 10 ? todo.todo : todo.todo.slice(0, 10) + '...';

    notification.notifyError(`Ошибка: не удалось удалить "${todoTitle}" - восстанавливаем`, {
        toastId: 'delete_todo' + todo.todo_id,
    });

    store._updateTodo(oldValue);
}
